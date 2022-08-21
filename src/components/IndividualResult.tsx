type IndividualResultProps = {
    active?: boolean;
    title: string;
    score: number;
};

function IndividualResult({ active, title, score }: IndividualResultProps) {
    const triangleStyled = active
        ? 'after:absolute after:left-2/4 after:top-0 after:-translate-x-2/4 after:-translate-y-full after:border-solid after:border-l-[16px] after:md:border-l-[24px] after:border-l-transparent after:border-r-[16px] after:md:border-r-[24px] after:border-r-transparent  after:border-b-8 after:md:border-b-[12px] after:border-b-clr-primary-500'
        : '';
    const headerTextColor = active ? 'text-white' : 'text-clr-accent-200';
    const spanTextColor = active ? 'text-white' : 'text-clr-primary-900';
    const divBackground = active ? 'bg-clr-primary-500' : 'bg-clr-accent-300';

    return (
        <div
            className={`relative w-full  py-2 ${triangleStyled} ${divBackground}`}
        >
            <h2
                className={`text-center  text-base leading-5 ${headerTextColor}`}
            >
                {title}
            </h2>
            <span
                className={`inline-block w-full text-center  text-2xl mt-1 ${spanTextColor}`}
            >
                {score}
            </span>
        </div>
    );
}

export default IndividualResult;
