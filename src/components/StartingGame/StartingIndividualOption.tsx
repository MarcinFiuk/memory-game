import Button from '../Button';
import { useGameParameters } from '../../context/StartGameParameters';

type IndividualOptionProps = {
    title?: string;
    arrWithButtons: string[] | number[];
    objKey?: string; //NOTE: not sure if it should be here
    individualStyle?: {
        mt?: string;
        gap?: string;
        customColor?: string;
        customFont?: string;
    };
};

function StartingIndividualOption({
    title,
    objKey, //NOTE: not sure if it should be here
    arrWithButtons,
    individualStyle,
}: IndividualOptionProps) {
    const { startingParameters, setStartingParameters } = useGameParameters();

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
                    );
                })}
            </div>
        </div>
    );
}

export default StartingIndividualOption;
