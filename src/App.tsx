import { useGameParameters } from './context/StartGameParameters';
import Game from './components/Game/Game';
import StartGame from './components/StartingGame/StartGame';

function App() {
    const {
        startingParameters: { settings, start },
    } = useGameParameters();

    const missingParameters = Object.values(settings).includes(null);

    return (
        <div className='relative'>
            {(missingParameters || !start) && <StartGame />}
            {!missingParameters && start && <Game />}
        </div>
    );
}

export default App;
