import { useState } from 'react';

import Title from '../Title';
import Button from '../Button';
import Overlay from '../Overlay';

function GameHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const stateOfMenu = isMenuOpen ? 'absolute inset-0' : 'hidden';

    const openMenuHandler = () => {
        setIsMenuOpen(true);
    };

    const closeMenuHandler = () => {
        setIsMenuOpen(false);
    };

    /**
     * think about some animation
     * either sone library on setTimeout
     */

    return (
        <header className='flex justify-between m-6 mb-0 md:m-9 md:mb-0 lg:mx-40 lg:mt-16'>
            <Title whereDisplayed='game'>memory</Title>
            <div className='w-20'>
                <Button
                    customColor='bg-clr-primary-500 hover:bg-clr-accent-500 md:hidden'
                    onClick={openMenuHandler}
                >
                    Menu
                </Button>
            </div>
            <nav
                className={`${stateOfMenu} flex justify-center items-center px-6 md:block md:p-0`}
            >
                <Overlay />
                <div className='flex flex-wrap gap-4 w-full p-6 bg-clr-neutral-100 rounded-xl z-50 md:h-full md:flex-nowrap md:max-w-[292px] md:w-80 md:p-0'>
                    <Button
                        onClick={closeMenuHandler}
                        customColor='bg-clr-primary-500 hover:bg-clr-accent-500'
                        customFontSize='md:text-custom-base'
                    >
                        Restart
                    </Button>
                    <Button
                        onClick={closeMenuHandler}
                        customColor='bg-clr-accent-300 hover:bg-clr-accent-400'
                        customFontColor='text-clr-primary-900'
                        customFontSize='md:text-custom-base'
                    >
                        New Game
                    </Button>
                    <Button
                        onClick={closeMenuHandler}
                        customColor='bg-clr-accent-300 hover:bg-clr-accent-400 md:hidden'
                        customFontColor='text-clr-primary-900'
                    >
                        Resume Game
                    </Button>
                </div>
            </nav>
        </header>
    );
}

export default GameHeader;
