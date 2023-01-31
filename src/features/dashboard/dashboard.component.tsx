import React, { useEffect, useState } from "react";

import './dashboard.component.scss';
import { contractsActions } from "../../redux/contracts/slice";
import { useAppDispatch, useAppSelector } from "../../redux/contracts/hooks";
import HmDashboardTile from "../../components/dashboard-tile/dashboard-tile.component";
import InputComponent from "../../components/dashboard-base-input/dashboard-input.component";
import { IContract } from "../../core/core.types";

function HmDashboard(): JSX.Element {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredContracts, setFilteredContracts] = useState<IContract[]>([]);

    const dispatch = useAppDispatch();
    const contracts = useAppSelector(state => state.contracts.items);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        dispatch((contractsActions.loadContracts()));
    }, [])

    useEffect(() => {
        if (inputValue.length < 2) {
            setFilteredContracts(contracts);
            return;
        }

        const fc = contracts.filter((contract: IContract) => {
            return contract.customerName.includes(inputValue) || contract.address.includes(inputValue);
        })

        setFilteredContracts(fc);
    }, [inputValue])

    useEffect(() => {
        setFilteredContracts(contracts);
    }, [contracts])

    return (
        <div className="hm-dashboard">
            <div className="hm-dashboard__search">
                <InputComponent
                    placeholder="Search customer"
                    onChange={onInputChange}
                    value={inputValue}
                />
            </div>
            <div className="hm-dashboard__tiles-wrapper">
                {
                    filteredContracts.map((contract) => (
                        <HmDashboardTile
                            key={contract.projectId}
                            customerName={contract.customerName}
                            projectId={contract.projectId}
                            address={contract.address}
                            projectState={contract.projectState}
                            rooms={contract.rooms}
                            totalProject={contract.totalProject}
                            updated_timestmp={contract.updated_timestmp}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default HmDashboard;



