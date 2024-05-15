import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({})

interface IProps {
    children: React.ReactElement
}

export const CharacterAnimationsProvider = (props: IProps) => {
    const [animationIndex, setAnimationIndex] = useState(0)
    const [animations, setAnimations] = useState<string[]>([])
    const [color, setColor] = useState()
    return <CharacterAnimationsContext.Provider value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
        color,
        setColor
    }}>
        {props.children}
    </CharacterAnimationsContext.Provider>
}

export const useCharacterAnimations = () => {
    return useContext(CharacterAnimationsContext) as {
        animations: string[],
        animationIndex: number,
        setAnimationIndex: (idx: number) => void;
        setColor: (col: string) => void;
    }
}