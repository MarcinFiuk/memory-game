import GameHeader from './GameHeader';
import GameResult from './GameResult';
import GameSection from './GameSection';

function Game() {
    return (
        <div className='absolute  inset-0 bg-white -z-20'>
            <GameHeader />
            <main>
                <GameSection />
                <GameResult />
            </main>
        </div>
    );
}

export default Game;
