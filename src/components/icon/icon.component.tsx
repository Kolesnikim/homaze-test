import React, {CSSProperties} from "react";
import { FaSearch } from 'react-icons/fa'
import './icon.component.scss'
import {IIconProps, TIconType} from "./icon.types";

const icons = (type: TIconType): JSX.Element => {
    switch (type) {
        case "search":
        default: {
            return <FaSearch />
        }
    }
};

const HmIconComponent = ({ className, onClick, style, type }: IIconProps): JSX.Element => (
    <i
        role="presentation"
        aria-hidden="true"
        className={className}
        onClick={onClick}
        style={style}
        tabIndex={-1}
    >
        {icons(type)}
    </i>
);

export default HmIconComponent;
