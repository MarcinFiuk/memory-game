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
