export const shuffleCards = (
    arr: JSX.Element[] | number[],
    gridSize: number
) => {
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
