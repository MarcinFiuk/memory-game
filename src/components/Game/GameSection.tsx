import { useState, useEffect, useMemo } from 'react';

import { shuffleCards } from '../../helpers/gameHelper';
import Card from '../Card';
import cards from '../../data/cards';

function GameSection() {
    const [openedCards, setOpenedCards] = useState<number[]>([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const toBeChanged = 6;

    const memoizedArr = useMemo(
        () => shuffleCards(cards.icons, toBeChanged),
        [toBeChanged]
    );

    useEffect(() => {
        if (openedCards.length > 1) {
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false);
                setOpenedCards([]);
            }, 1000);
        }
    }, [openedCards]);

    const addCardToCompareHandler = (id: number) => {
        if (openedCards.some((el) => el === id)) {
            return;
        }
        setOpenedCards(() => {
            return [...openedCards, id];
        });
    };

    const numOfColumnsAndRows = (num: 4 | 6) => {
        if (num === 4) {
            return 'grid-cols-4 grid-rows-4 gap-3 text-4xl md:text-6xl';
        }
        if (num === 6) {
            return 'grid-cols-6 grid-rows-6 gap-2 text-2xl md:text-5xl';
        }

        return console.warn(
            'unknown number of columns. Should be either 4 or 6'
        );
    };

    return (
        <main>
            <div
                className={`grid ${numOfColumnsAndRows(
                    toBeChanged
                )} mx-auto mt-20 w-[330px] h-[330px] lg:w-[532px] lg:h-[532px] xl:w-[572px] xl:h-[572px]`}
            >
                {memoizedArr.map(({ card, id }) => {
                    return (
                        <Card
                            key={id}
                            individualId={id}
                            isTurned={openedCards.some((el) => el === id)}
                            setTurnCard={addCardToCompareHandler}
                            disableButton={isDisabled}
                        >
                            {card}
                        </Card>
                    );
                })}
            </div>
        </main>
    );
}
export default GameSection;
