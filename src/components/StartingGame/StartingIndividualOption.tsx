import Button from '../Button';
import { Settings, useGameParameters } from '../../context/StartGameParameters';

type IndividualOptionProps<T extends keyof Settings> = {
    title?: string;
    arrWithButtons: Array<Settings[T]>;
    objKey: T;
    individualStyle?: {
        mt?: string;
        gap?: string;
        customColor?: string;
        customFont?: string;
    };
};

function StartingIndividualOption<T extends keyof Settings>({
    title,
    objKey,
    arrWithButtons,
    individualStyle,
}: IndividualOptionProps<T>) {
    const { startingParameters, setSetting } = useGameParameters();
    const value = startingParameters.settings[objKey]

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
                            onClick={() => setSetting(objKey, content)}
                            aria-selected={value === content}
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
