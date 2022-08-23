import { useState, createContext, useContext, ReactNode } from 'react';

export type Settings = {
    type: 'numbers' | 'icons' | null;
    numOfPlayers: 1 | 2 | 3 | 4 | null;
    grid: 4 | 6 | null;
}

type ContextProviderProps = {
    children: ReactNode;
};

export type State = {
    settings: Settings;
    start: boolean;
};

type Dispatch = (value: State) => void;
// This uses generics: https://www.typescriptlang.org/docs/handbook/2/generics.html
type SetSetting = <T extends keyof Settings>(key: T, value: Settings[T]) => void;
type Context = { startingParameters: State; setStartingParameters: Dispatch; setSetting: SetSetting; startGame: () => void }

const GameContext = createContext<Context| undefined>(undefined);

function GameProvider({ children }: ContextProviderProps) {
    const [startingParameters, setStartingParameters] = useState<State>({
        settings: { type: null, numOfPlayers: null, grid: null },
        start: false,
    });

    const setSetting: SetSetting = (key, val) =>
        setStartingParameters({
            ...startingParameters,
            settings: {
                ...startingParameters.settings,
                [key]: val
            }
        })

    const startGame = () => setStartingParameters({
        ...startingParameters,
        start: true
    })

    const value = { startingParameters, setStartingParameters, setSetting, startGame };

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
