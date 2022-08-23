import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    style?: React.CSSProperties;
    selected?: boolean;
    customColor?: string;
    customFontSize?: string;
    customFontColor?: string;
};

function Button({
    onClick,
    customColor,
    customFontSize,
    customFontColor,
    children,
    selected,
}: ButtonProps) {
    let bgColor = 'bg-clr-primary-300 hover:bg-clr-accent-400';
    if (customColor) {
        bgColor = customColor;
    }
    if (selected) {
        bgColor = 'bg-clr-primary-900 hover:bg-clr-accent-400';
    }

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
