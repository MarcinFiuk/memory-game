import React from 'react';

type ButtonProps = {
    onClick?: () => void;
    style?: React.CSSProperties;
    customColor?: string;
    customFontSize?: string;
    customFontColor?: string;
    children: React.ReactNode;
};

function Button({
    onClick,
    customColor,
    customFontSize,
    customFontColor,
    children,
}: ButtonProps) {
    const bgColor = customColor
        ? customColor
        : 'bg-clr-primary-300 hover:bg-clr-accent-400';

    const fontSize = customFontSize ? customFontSize : 'md:text-custom-l';
    const fontColor = customFontColor
        ? customFontColor
        : 'text-clr-neutral-100';

    return (
        <button
            onClick={onClick}
            className={`text-base leading-5 ${fontColor} rounded-3xl w-full py-2.5 ${bgColor}  ${fontSize}`}
        >
            {children}
        </button>
    );
}

export default Button;
