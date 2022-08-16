import { ComponentPropsWithoutRef } from 'react';

type CardProps = ComponentPropsWithoutRef<'button'> & {
    isTurned: boolean;
    individualId: number;
    disableButton: boolean;
    setTurnCard: (id: number) => void;
};

function Card({
    individualId,
    isTurned,
    disableButton,
    setTurnCard,
    children,
}: CardProps) {
    return (
        <button
            onClick={() => setTurnCard(individualId)}
            className='relative'
            disabled={disableButton}
        >
            <div
                className='absolute inset-0 rounded-full bg-clr-primary-900 duration-300 ease-linear'
                style={
                    isTurned
                        ? {
                              transform: 'rotateY(0.25turn)',
                          }
                        : { transform: 'rotateY(0)', transitionDelay: '0.3s' }
                }
            />
            <div
                className=' absolute inset-0 rounded-full bg-clr-primary-500 text-white grid  place-items-center duration-300 delay-300 ease-linear'
                style={
                    isTurned
                        ? { transform: 'rotateY(0)' }
                        : {
                              transform: 'rotateY(0.25turn)',
                              transitionDelay: '0s',
                          }
                }
            >
                {children}
            </div>
        </button>
    );
}

export default Card;
