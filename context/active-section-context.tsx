"use client";

import type { SectionName } from "@/lib/types";
import { createContext, useContext, useState } from "react";


type ActiveSectionContextType = {
    activeSection : SectionName;
    setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick : number;
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: {children: React.ReactNode}){
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); //used to disable the observer for when the navlinks are clicked

    return(
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context === null){
        throw new Error("useActiveSection Context must be used within a ActiveSectionContextProvider");
    }

    return context;
}