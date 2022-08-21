import { useState, createContext, useContext, ReactNode } from 'react';

type ContextProviderProps = {
    children: ReactNode;
};
type State = {
    type: 'numbers' | 'icons' | null;
    numOfPlayers: 1 | 2 | 3 | 4 | null;
    grid: 4 | 6 | null;
};
type Dispatch = (value: State) => void;

const GameContext = createContext<
    { startingParameters: State; setStartingParameters: Dispatch } | undefined
>(undefined);

function GameProvider({ children }: ContextProviderProps) {
    const [startingParameters, setStartingParameters] = useState<State>({
        type: null,
        numOfPlayers: null,
        grid: null,
    });

    const value = { startingParameters, setStartingParameters };

    return (
        <GameContext.Provider value={value}>{children}</GameContext.Provider>
    );
}

function useGameParameters() {
    const context = useContext(GameContext);

    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }

    return context;
}

export { GameProvider, useGameParameters };
