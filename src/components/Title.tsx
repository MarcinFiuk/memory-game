import React from 'react';

type TitleProps = {
    children: React.ReactNode;
    whereDisplayed: 'startGame' | 'game';
};

function Title({ whereDisplayed, children }: TitleProps) {
    //NOTE: double check the style for game
    const titleStyle = (position: string) => {
        if (position === 'startGame') {
            return 'text-custom-xl md:text-custom-2xl text-center text-clr-neutral-100 md:text-custom-2xl';
        }
        if (position === 'game') {
            return 'text-2xl  clr-accent-900 md:text-custom-2xl';
        }
    };

    return <h1 className={`${titleStyle(whereDisplayed)}`}>{children}</h1>;
}

export default Title;
