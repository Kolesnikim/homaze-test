import {CSSProperties} from "react";

export type TIconType = 'search' | string | undefined;

export interface IIconProps {
    className?: string,
    onClick?: () => {},
    style?: CSSProperties | undefined,
    type: TIconType
}