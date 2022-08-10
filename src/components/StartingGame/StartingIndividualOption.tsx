import Button from '../Button';

type IndividualOptionProps = {
    title?: string;
    arrWithButtons: string[];
    individualStyle?: {
        mt?: string;
        gap?: string;
        customColor?: string;
        customFont?: string;
    };
};

function StartingIndividualOption({
    title,
    arrWithButtons,
    individualStyle,
}: IndividualOptionProps) {
    return (
        <div className={`${individualStyle?.mt}`}>
            <p className='text-clr-accent-200 text-base leading-5 mb-3 md:text-xl md:leading-6 md:mb-4'>
                {title}
            </p>
            <div className={`flex justify-center ${individualStyle?.gap}`}>
                {arrWithButtons.map((content, index) => {
                    return (
                        <Button
                            key={index}
                            customColor={individualStyle?.customColor}
                            customFontSize={individualStyle?.customFont}
                        >
                            {content}
                        </Button>
                        // <button
                        //     className={`text-base leading-5 text-clr-neutral-100 rounded-3xl w-full py-2.5 ${color} md:text-custom-l ${individualStyle?.customFont} `}
                        //     key={index}
                        // >
                        //     {content}
                        // </button>
                    );
                })}
            </div>
        </div>
    );
}

export default StartingIndividualOption;
