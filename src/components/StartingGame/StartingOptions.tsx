import StartingIndividualOption from './StartingIndividualOption';
import { useGameParameters } from '../../context/StartGameParameters';

function StartingOptions() {
    const { startingParameters, setStartingParameters } = useGameParameters();

    return (
        <div className='w-full bg-clr-neutral-100 p-6 rounded-xl md:p-14 md:rounded-[20px] md:max-w-2xl md:mx-auto'>
            <StartingIndividualOption
                title='Select Theme'
                objKey='type'
                arrWithButtons={['Numbers', 'Icons']}
                individualStyle={{ gap: 'gap-3 md:gap-8' }}
            />
            <StartingIndividualOption
                title='Numbers of Players'
                objKey='numOfPlayers'
                arrWithButtons={[1, 2, 3, 4]}
                individualStyle={{ mt: 'mt-6 md:mt-8', gap: 'gap-3 md:gap-5' }}
            />
            <StartingIndividualOption
                title='Grid Size'
                objKey='grid'
                arrWithButtons={['4x4', '6x6']}
                individualStyle={{ mt: 'mt-6  md:mt-8', gap: 'gap-3 md:gap-8' }}
            />
            <StartingIndividualOption
                objKey='start'
                arrWithButtons={['Start Game']}
                individualStyle={{
                    mt: 'mt-8',
                    customColor: 'bg-clr-primary-500 hover:bg-clr-accent-500',
                    customFont: 'md:text-4xl',
                }}
            />
        </div>
    );
}

export default StartingOptions;
