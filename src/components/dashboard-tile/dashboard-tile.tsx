import React from "react";
import './dashboard-tile.scss'
import {IContract} from "../../api/types";
import { stringSliceHelper } from "../../helpers/helpers";

export type IDashboardTileProps = Partial<IContract>;

function HmDashboardTile(
    {
        customerName,
        projectId,
        address,
        projectState,
        rooms,
        totalProject,
        updated_timestmp
    }: IDashboardTileProps): JSX.Element {
    const formattedDate = new Date(updated_timestmp ?? 0).toLocaleDateString();

    const getStageClasses = (): string => {
        let defaultClass = 'dashboard-tile__stage';

        switch (projectState) {
            case 'In progress':
                defaultClass = `${defaultClass}--in-progress`;
                break;
            case 'Cancelled':
                defaultClass = `${defaultClass}--cancelled`;
                break;
            case 'Negotiation':
                defaultClass = `${defaultClass}--negotiation`;
                break;
            case 'Done':
            default:
                defaultClass = `${defaultClass}--done`;
                break;
        }

        return defaultClass
    }

    const calculatedCustomerName = stringSliceHelper(customerName, 25);
    const calculatedAddress = stringSliceHelper(address, 35);

    return (
        <div className='dashboard-tile'>
            <div className="dashboard-tile__header">
                <span className="dashboard-tile__title">{calculatedCustomerName}</span>
                <span className="dashboard-tile__id">ID: {projectId}</span>
            </div>

            <div className="dashboard-tile__content">
                <span className='dashboard-tile__address'>{calculatedAddress}</span>

                <div className="dashboard-tile__rooms">
                    {rooms?.map(room => (
                        <span key={room.id}>{room.name}</span>
                    ))}
                </div>

                <div className="dashboard-tile__additional-info">
                    <span className='dashboard-tile__date'>
                        <span>Last updated</span>
                        <span>{formattedDate}</span>
                    </span>

                    <span className='dashboard-tile__total'>
                        <span>Total</span>
                        <span>${totalProject}</span>
                    </span>

                    <span className={`dashboard-tile__stage ${getStageClasses()}`}>
                        <span>Stage</span>
                        <span>{projectState}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HmDashboardTile;