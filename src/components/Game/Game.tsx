import { useState, useEffect } from 'react';

import GameHeader from './GameHeader';
import GameSection from './GameSection';
import { useGameParameters } from '../../context/StartGameParameters';
import {
    generateStateForMultiplayer,
    generateStateForSinglePlayer,
    addPoint,
} from '../../helpers/gameHelper';
import ResultsForMultiplayer from '../Results/ResultsForMultiplayer';
import ResultsForSinglePlayer from '../Results/ResultsForSinglePlayer';

function Game() {
    const { startingParameters } = useGameParameters();
    const { settings } = startingParameters;
    const { numOfPlayers } = settings;
    const [activePlayer, setActivePlayer] = useState(1);
    const [results, setResults] = useState(() =>
        generateStateForMultiplayer(numOfPlayers)
    );
    const [pairWasFount, setPairWasFound] = useState<'yes' | 'no' | null>(null);

    useEffect(() => {
        if (numOfPlayers !== 1) {
            setActivePlayer(1);
        }
    }, [numOfPlayers]);

    if (pairWasFount === 'yes') {
        const updatedResults = addPoint(results, activePlayer);
        setResults(updatedResults);
        setPairWasFound(null);
    }

    if (pairWasFount === 'no') {
        setActivePlayer((prev) => {
            const newPlayer = prev === numOfPlayers ? 1 : prev + 1;
            return newPlayer;
        });
        setPairWasFound(null);
    }

    return (
        <div className='absolute  inset-0 bg-white -z-20'>
            <GameHeader />
            <main>
                <GameSection getMoveOutcome={setPairWasFound} />
                {numOfPlayers === 1 && <ResultsForSinglePlayer />}
                {numOfPlayers! > 1 && (
                    <ResultsForMultiplayer
                        results={results}
                        activePlayer={activePlayer}
                    />
                )}
            </main>
        </div>
    );
}

export default Game;
