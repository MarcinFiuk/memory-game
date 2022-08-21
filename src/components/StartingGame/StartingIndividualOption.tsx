import Button from '../Button';

type IndividualOptionProps = {
    title?: string;
    arrWithButtons: string[];
    onClick?: () => void;
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
    onClick,
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
                            onClick={onClick}
                        >
                            {content}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default StartingIndividualOption;
