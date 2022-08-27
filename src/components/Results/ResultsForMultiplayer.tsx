import IndividualResult from '../IndividualResult';

type ResultsForMultiPlayerProps = {
    results: {
        id: number;
        title: string;
        score: number;
    }[];
    activePlayer: number;
};

function ResultsForMultiplayer({
    results,
    activePlayer,
}: ResultsForMultiPlayerProps) {
    return (
        <div className='flex justify-between gap-6 mx-6 mt-24 md:mx-9 md:mt-28 lg:mx-40 lg:mt-20'>
            {results.map(({ id, title, score }) => {
                return (
                    <IndividualResult
                        key={id}
                        title={title}
                        score={score}
                        active={activePlayer === id}
                    />
                );
            })}
        </div>
    );
}

export default ResultsForMultiplayer;
