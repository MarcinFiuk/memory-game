import { useState, useMemo } from 'react';

import Card from '../Card';
import cards from '../../data/cards';

function GameSection() {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const toBeChanged = 4;

    const shuffleCards = (arr: JSX.Element[] | number[], gridSize: number) => {
        const pairNr = (gridSize * gridSize) / 2;
        const arrWithRequiredNrOfElements = arr.slice(0, pairNr);
        const shuffledArr = [
            ...arrWithRequiredNrOfElements,
            ...arrWithRequiredNrOfElements,
        ]
            .sort(() => Math.random() - 0.5)
            .map((card, index) => ({ card, id: index + 1 }));

        return shuffledArr;
    };

    const memoizedArr = useMemo(
        () => shuffleCards(cards.icons, toBeChanged),
        []
    );

    const numOfColumnsAndRows = (num: 4 | 6) => {
        if (num === 4) {
            return 'grid-cols-4 grid-rows-4 gap-3 text-4xl';
        }
        if (num === 6) {
            return 'grid-cols-6 grid-rows-6 gap-2 text-2xl';
        }

        return console.warn('unknown number of columns. Either 4 or 6');
    };

    const turnCard = (id: number) => {
        console.log(id);
        setIsOpen(id);
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
                            isTurned={id === isOpen}
                            setTurnCard={turnCard}
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
