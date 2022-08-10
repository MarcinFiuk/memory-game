import { useState, useEffect } from 'react';

// import { cards } from '../../data/cards';
import cards from '../../data/cards';

type CardsTypes = { card: JSX.Element | string; id: number }[];

function GameSection() {
    const [updatedCardsArr, setUpdatedCardsArr] = useState<CardsTypes | null>(
        null
    );
    const toBeChanged = 4;

    useEffect(() => {
        const pairNr = (toBeChanged * toBeChanged) / 2;
        const arrWithRequiredNrOfElements = cards.icons.slice(0, pairNr);
        const shuffledArr = [
            ...arrWithRequiredNrOfElements,
            ...arrWithRequiredNrOfElements,
        ]
            .sort(() => Math.random() - 0.5)
            .map((card, index) => ({ card, id: index + 1 }));
        setUpdatedCardsArr(shuffledArr);
    }, [toBeChanged]);

    const numOfColumnsAndRows = (num: 4 | 6) => {
        if (num === 4) {
            return 'grid-cols-4 grid-rows-4';
        }
        if (num === 6) {
            return 'grid-cols-6 grid-rows-6';
        }
    };

    return (
        <main>
            <div className={`grid ${numOfColumnsAndRows(toBeChanged)}`}>
                {updatedCardsArr?.map(({ card, id }) => {
                    return <div key={id}>{card}</div>;
                })}
            </div>
        </main>
    );
}
export default GameSection;
