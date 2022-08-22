import StartingIndividualOption from './StartingIndividualOption';
import { useGameParameters } from '../../context/StartGameParameters';

function StartingOptions() {
    const { startGame } = useGameParameters();

    return (
        <div className='w-full bg-clr-neutral-100 p-6 rounded-xl md:p-14 md:rounded-[20px] md:max-w-2xl md:mx-auto'>
            <StartingIndividualOption
                title='Select Theme'
                objKey='type'
                arrWithButtons={['numbers', 'icons']}
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
                arrWithButtons={[4, 6]}
                individualStyle={{ mt: 'mt-6  md:mt-8', gap: 'gap-3 md:gap-8' }}
            />
            <button type="button" onClick={startGame}>Start game</button>
        </div>
    );
}

export default StartingOptions;
