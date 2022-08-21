import StartingIndividualOption from './StartingIndividualOption';
import { useGameParameters } from '../../context/StartGameParameters';

function StartingOptions() {
    const { setStartingParameters } = useGameParameters();

    return (
        <div className='w-full bg-clr-neutral-100 p-6 rounded-xl md:p-14 md:rounded-[20px] md:max-w-2xl md:mx-auto'>
            <StartingIndividualOption
                title='Select Theme'
                arrWithButtons={['Numbers', 'Icons']}
                individualStyle={{ gap: 'gap-3 md:gap-8' }}
            />
            <StartingIndividualOption
                title='Numbers of Players'
                arrWithButtons={['1', '2', '3', '4']}
                individualStyle={{ mt: 'mt-6 md:mt-8', gap: 'gap-3 md:gap-5' }}
            />
            <StartingIndividualOption
                title='Grid Size'
                arrWithButtons={['4x4', '6x6']}
                individualStyle={{ mt: 'mt-6  md:mt-8', gap: 'gap-3 md:gap-8' }}
            />
            <StartingIndividualOption
                arrWithButtons={['Start Game']}
                individualStyle={{
                    mt: 'mt-8',
                    customColor: 'bg-clr-primary-500 hover:bg-clr-accent-500',
                    customFont: 'md:text-4xl',
                }}
                onClick={() => {
                    // NOTE: data should be taken dynamically from other buttons
                    //NOTE: here is hard coded testing version
                    setStartingParameters({
                        type: 'numbers',
                        numOfPlayers: 1,
                        grid: 4,
                    });
                }}
            />
        </div>
    );
}

export default StartingOptions;
