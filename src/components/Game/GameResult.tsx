import IndividualResult from '../IndividualResult';

function GameResult() {
    return (
        <div className='flex justify-between gap-6 mx-6 mt-24 md:mx-9 md:mt-28 lg:mx-40 lg:mt-20'>
            <IndividualResult title='P1' score={5} active />
            <IndividualResult title='P2' score={3} />
        </div>
    );
}

export default GameResult;
