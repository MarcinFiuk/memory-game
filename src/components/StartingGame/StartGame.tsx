import StartingOptions from './StartingOptions';
import Title from '../Title';
import { useGameParameters } from '../../context/StartGameParameters';

function StartGame() {
    // const data = useGameParameters();
    // console.log(data);

    return (
        <div className='absolute inset-0 min-h-screen bg-clr-accent-900 grid place-items-center '>
            <div className='flex flex-col w-full p-6 gap-11 md:px-14 md:gap-20'>
                <header>
                    <Title whereDisplayed='startGame'>memory</Title>
                </header>
                <StartingOptions />
            </div>
        </div>
    );
}
export default StartGame;
