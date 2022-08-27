export const shuffleCards = (
    arr: JSX.Element[] | string[],
    gridSize: number
) => {
    const pairNr = (gridSize * gridSize) / 2;
    const arrWithRequiredNrOfElements = arr.slice(0, pairNr);
    const arrWithCardsAndTags = arrWithRequiredNrOfElements.map(
        (card, index) => ({
            card,
            tag: index,
        })
    );
    const shuffledArr = [...arrWithCardsAndTags, ...arrWithCardsAndTags]
        .sort(() => Math.random() - 0.5)
        .map((card, index) => ({ id: index + 1, ...card }));

    return shuffledArr;
};

export const generateStateForMultiplayer = (
    playersNr: 1 | 2 | 3 | 4 | null
) => {
    const array = [];
    for (let i = 0; i < playersNr!; i++) {
        array.push(i + 1);
    }
    const fullName = window.matchMedia('(min-width: 768px)').matches;
    const titlePrefix = fullName ? 'Player ' : 'P';

    const stateForMoreThanOne = array.map((player) => {
        return { id: player, title: `${titlePrefix}${player}`, score: 0 };
    });

    return stateForMoreThanOne;
};

export const generateStateForSinglePlayer = () => {
    return [
        { id: 1, title: 'Time', score: '0:00' },
        { id: 2, title: 'Moves', score: 0 },
    ];
};

export const addPoint = (
    results: {
        id: number;
        title: string;
        score: number;
    }[],
    activePlayer: number
) => {
    const activePlayerIndex = results.findIndex(
        (player) => player.id === activePlayer
    );

    const resultsCopy = [...results];
    const newScore = resultsCopy[activePlayerIndex].score + 1;

    resultsCopy[activePlayerIndex] = {
        ...resultsCopy[activePlayerIndex],
        score: newScore,
    };
    return resultsCopy;
};
