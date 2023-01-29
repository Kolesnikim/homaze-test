import React, {CSSProperties} from "react";
import { FaSearch } from 'react-icons/fa'
import './icon.component.scss'

const icons = (type: TIconType): JSX.Element => {
    switch (type) {
        case "search":
        default: {
            return <FaSearch />
        }
    }
};

export type TIconType = 'search' | string | undefined;

export interface IIconProps {
    className?: string,
    onClick?: () => {},
    style?: CSSProperties | undefined,
    type: TIconType
}

const IconComponent = ({ className, onClick, style, type }: IIconProps): JSX.Element => (
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

export default IconComponent;
