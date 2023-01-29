import { ChangeEventHandler, CSSProperties } from "react";
import { TIconType } from "../icon/icon.types";

export interface IInputProps {
    className?: string,
    containerStyle?: CSSProperties | undefined,
    errors?: string,
    disabled?: boolean,
    icon?: string,
    inputStyle?: CSSProperties | undefined,
    name?: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    placeholder?: string,
    readOnly?: boolean,
    required?: boolean,
    type?: TIconType,
    value?: string,
    wrapperStyle?: CSSProperties | undefined,
}