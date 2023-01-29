import React, {ChangeEventHandler, CSSProperties} from "react";
import './dashboard-input.component.scss'
import IconComponent, {TIconType} from "../icon/icon.component";

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
const InputComponent = ({
                            className,
                            containerStyle,
                            disabled,
                            icon,
                            inputStyle,
                            name,
                            onChange,
                            placeholder,
                            readOnly,
                            type,
                            value,
                            wrapperStyle
                        }: IInputProps): JSX.Element => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = (): void => {
        if ((inputRef?.current) !== null) inputRef.current?.focus();
    };

    return (
        <div className={className} style={wrapperStyle}>
            <div onClick={handleClick} className="container" style={containerStyle}>
                <IconComponent type={icon} className='search-icon__dashboard' />
                <input
                    ref={inputRef}
                    aria-label={name}
                    tabIndex={0}
                    type={type}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    style={inputStyle}
                    disabled={disabled}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
};
export default InputComponent;