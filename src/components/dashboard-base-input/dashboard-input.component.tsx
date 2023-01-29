import React, { memo } from "react";

import './dashboard-input.component.scss';
import { IInputProps } from "./dashboard-input.types";
import IconComponent from "../icon/icon.component";

// eslint-disable-next-line react/display-name
const HmInputComponent = memo(({
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
            <div onClick={handleClick} className="hm-container" style={containerStyle}>
                <IconComponent type={icon} className='hm-search-icon__dashboard' />
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
})
export default HmInputComponent;