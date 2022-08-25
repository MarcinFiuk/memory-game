import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import GameHeader from './GameHeader';
import GameResult from './GameResult';
import GameSection from './GameSection';
import { useGameParameters } from '../../context/StartGameParameters';
import { generateStateForXPlayers } from '../../helpers/resultsHelper';

type ActivePlayersTypes = number;

function Game() {
    const { startingParameters } = useGameParameters();
    const { settings } = startingParameters;
    const { numOfPlayers } = settings;
    const [activePlayer, setActivePlayer] = useState<ActivePlayersTypes>(1);
    const [resultsState, setResultsState] = useState(
        generateStateForXPlayers(numOfPlayers)
    );

    useEffect(() => {
        if (numOfPlayers !== 1) {
            setActivePlayer(1);
        }
    }, [numOfPlayers]);

    const getResultInfo = (found: boolean) => {
        if (found) {
            console.log('found');
        }
        if (!found) {
            setActivePlayer((prev) => {
                const newState = prev >= 4 ? 1 : prev + 1;
                return newState;
            });
        }
    };

    return (
        <div className='absolute  inset-0 bg-white -z-20'>
            <GameHeader />
            <main>
                <GameSection pairMatch={getResultInfo} />
                <GameResult
                    results={resultsState}
                    activePlayer={activePlayer}
                />
            </main>
        </div>
    );
}

export default Game;
