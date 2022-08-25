export const generateStateForXPlayers = (playersNr: 1 | 2 | 3 | 4 | null) => {
    if (playersNr === 1) {
        return [
            { id: 1, title: 'Time', score: '0:00' },
            { id: 2, title: 'Moves', score: 0 },
        ];
    }
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
