import { ComponentPropsWithoutRef } from 'react';

type CardProps = ComponentPropsWithoutRef<'button'> & {
    isTurned: boolean;
    isCardFound: boolean;
    individualId: number;
    disableButton: boolean;
    tag: number;
    getCardDetails: (id: number, tag: number) => void;
};

function Card({
    individualId,
    isTurned,
    isCardFound,
    disableButton,
    getCardDetails,
    children,
    tag,
}: CardProps) {
    const overlappingStyle: string =
        'absolute inset-0 rounded-full duration-300 ease-linear';

    return (
        <button
            onClick={() => getCardDetails(individualId, tag)}
            className='relative'
            disabled={disableButton || isCardFound}
        >
            <div
                className={`bg-clr-primary-900 ${overlappingStyle} `}
                style={
                    !isTurned && !isCardFound
                        ? {
                              transform: 'rotateY(0)',
                              transitionDelay: '0.3s',
                          }
                        : {
                              transform: 'rotateY(0.25turn)',
                          }
                }
            />
            <div
                className={`${
                    isCardFound ? 'bg-clr-primary-300' : 'bg-clr-primary-500'
                } text-white grid  place-items-center delay-300 ${overlappingStyle}`}
                style={
                    !isTurned && !isCardFound
                        ? {
                              transform: 'rotateY(0.25turn)',
                              transitionDelay: '0s',
                          }
                        : { transform: 'rotateY(0)' }
                }
                data-tag={tag}
            >
                {children}
            </div>
        </button>
    );
}

export default Card;
