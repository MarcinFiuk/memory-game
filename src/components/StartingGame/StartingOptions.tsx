import StartingIndividualOption from './StartingIndividualOption';
import { useGameParameters } from '../../context/StartGameParameters';
import Button from '../Button';

function StartingOptions() {
    const { startGame } = useGameParameters();

    return (
        <div className='w-full bg-clr-neutral-100 p-6 rounded-xl md:p-14 md:rounded-[20px] md:max-w-2xl md:mx-auto'>
            <StartingIndividualOption
                title='Select Theme'
                objKey='type'
                arrWithButtons={[
                    { text: 'Numbers', value: 'numbers' },
                    { text: 'Icons', value: 'icons' },
                ]}
                individualStyle={{ gap: 'gap-3 md:gap-8' }}
                //NOTE: find better way to play with style!¬!!!!!!!!!
            />
            <StartingIndividualOption
                title='Numbers of Players'
                objKey='numOfPlayers'
                arrWithButtons={[
                    { text: '1', value: 1 },
                    { text: '2', value: 2 },
                    { text: '3', value: 3 },
                    { text: '4', value: 4 },
                ]}
                individualStyle={{ mt: 'mt-6 md:mt-8', gap: 'gap-3 md:gap-5' }}
            />
            <StartingIndividualOption
                title='Grid Size'
                objKey='grid'
                arrWithButtons={[
                    { text: '4x4', value: 4 },
                    { text: '6x6', value: 6 },
                ]}
                individualStyle={{ mt: 'mt-6  md:mt-8', gap: 'gap-3 md:gap-8' }}
            />
            <div className='mt-8 '>
                <Button
                    customColor='bg-clr-primary-500 hover:bg-clr-accent-500'
                    onClick={startGame}
                >
                    Start game
                </Button>
            </div>
        </div>
    );
}

export default StartingOptions;
