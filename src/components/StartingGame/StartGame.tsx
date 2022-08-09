import StartingOptions from './StartingOptions';
import Title from '../Title';

function StartGame() {
    return (
        <div className='min-h-screen bg-clr-accent-900 grid place-items-center '>
            <div className='flex flex-col w-full px-6 gap-11 md:px-14 md:gap-20'>
                <Title whereDisplayed='startGame'>memory</Title>
                <StartingOptions />
            </div>
        </div>
    );
}
export default StartGame;
