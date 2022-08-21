import { useState, useEffect, useMemo } from 'react';

import { shuffleCards } from '../../helpers/gameHelper';
import Card from '../Card';
import cards from '../../data/cards';

function GameSection() {
    const [openedCards, setOpenedCards] = useState<number[]>([]);
    const [cardsToCompare, setCardsToCompare] = useState<number[]>([]);
    const [foundCards, setFoundCards] = useState<number[]>([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const toBeChanged: 4 | 6 = 4;

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

    useEffect(() => {
        if (cardsToCompare.length > 1) {
            if (cardsToCompare[0] === cardsToCompare[1]) {
                setFoundCards((prev) => [...prev, cardsToCompare[0]]);
            }
            setCardsToCompare([]);
        }
    }, [cardsToCompare]);

    const addCardToCompareHandler = (id: number, tag: number) => {
        if (openedCards.some((el) => el === id)) {
            return;
        }

        setOpenedCards(() => {
            return [...openedCards, id];
        });
        setCardsToCompare(() => {
            return [...cardsToCompare, tag];
        });
    };

    const numOfColumnsAndRows = (num: 4 | 6) => {
        if (num === 4) {
            return 'grid-cols-4 grid-rows-4 gap-3 text-4xl lg:text-6xl';
        }
        if (num === 6) {
            return 'grid-cols-6 grid-rows-6 gap-2 text-2xl lg:text-5xl';
        }

        return console.warn(
            'unknown number of columns. Should be either 4 or 6'
        );
    };

    return (
        <div
            className={`grid ${numOfColumnsAndRows(
                toBeChanged
            )} mx-auto mt-20 w-[330px] h-[330px] lg:w-[532px] lg:h-[532px] xl:w-[572px] xl:h-[572px]`}
        >
            {memoizedArr.map(({ id, card, tag }) => {
                return (
                    <Card
                        key={id}
                        individualId={id}
                        isTurned={openedCards.some((el) => el === id)}
                        getCardDetails={addCardToCompareHandler}
                        disableButton={isDisabled}
                        isCardFound={foundCards.some((el) => el === tag)}
                        tag={tag}
                    >
                        {card}
                    </Card>
                );
            })}
        </div>
    );
}
export default GameSection;
