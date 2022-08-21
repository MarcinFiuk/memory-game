import { useGameParameters } from './context/StartGameParameters';
import Game from './components/Game/Game';
import StartGame from './components/StartingGame/StartGame';

function App() {
    const { startingParameters } = useGameParameters();

    const missingParameters = Object.values(startingParameters).includes(null);

    return (
        <div className='relative'>
            {missingParameters && <StartGame />}
            {!missingParameters && <Game />}
        </div>
    );
}

export default App;
