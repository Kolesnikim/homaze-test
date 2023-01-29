import React, { useEffect } from "react";
import './dashboard.scss';
import { contractsActions } from "../../redux/counter/slice";
import { useAppDispatch, useAppSelector } from "../../redux/counter/hooks";
import HmDashboardTile from "../../components/dashboard-tile/dashboard-tile";

function HmDashboard(): JSX.Element {
    const dispatch = useAppDispatch();
    const contracts = useAppSelector(state => state.contracts.items);


    useEffect(() => {
        dispatch((contractsActions.loadContracts()));
    }, [])

    return (
        <div className="hm-dashboard">
            {
                contracts.map((contract) => (
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
    );
}

export default HmDashboard;



