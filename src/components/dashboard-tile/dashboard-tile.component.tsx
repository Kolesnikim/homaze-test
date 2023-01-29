import React, { memo } from "react";

import './dashboard-tile.component.scss';
import { stringSliceHelper } from "../../helpers/helpers";
import { IDashboardTileProps } from "./dashboard-tile.types";


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
        let defaultClass = 'hm-dashboard-tile__stage';

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
        <div className='hm-dashboard-tile'>
            <div className="hm-dashboard-tile__header">
                <span className="hm-dashboard-tile__title">{calculatedCustomerName}</span>
                <span className="hm-dashboard-tile__id">ID: {projectId}</span>
            </div>

            <div className="hm-dashboard-tile__content">
                <span className='hm-dashboard-tile__address'>{calculatedAddress}</span>

                <div className="hm-dashboard-tile__rooms">
                    {rooms?.map(room => (
                        <span key={room.id}>{room.name}</span>
                    ))}
                </div>

                <div className="hm-dashboard-tile__additional-info">
                    <span className='hm-dashboard-tile__date'>
                        <span>Last updated</span>
                        <span>{formattedDate}</span>
                    </span>

                    <span className='hm-dashboard-tile__total'>
                        <span>Total</span>
                        <span>${totalProject}</span>
                    </span>

                    <span className={`hm-dashboard-tile__stage ${getStageClasses()}`}>
                        <span>Stage</span>
                        <span>{projectState}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default memo(HmDashboardTile);