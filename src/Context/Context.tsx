import React, { createContext } from "react";
import { AvailableActions, noteList, person, toDoProperty } from "../@types/types";

export type ContextNoteList = {
    noteList: noteList[],
    setNoteList: React.Dispatch<React.SetStateAction<noteList[]>>
};
export const NoteListContext = createContext<ContextNoteList | null>(null);


export type ContextPropertyToDo = {
    propertyToDo: toDoProperty,
    setProppertyToDo: React.Dispatch<React.SetStateAction<toDoProperty>>
};
export const PropertyToDoContext = createContext<ContextPropertyToDo | null>(null);


export type ContextAvailableActions = {
    availableActions: AvailableActions[],
    setAvailableActions: React.Dispatch<React.SetStateAction<AvailableActions[]>>
};
export const AvailableActionsContext = createContext<ContextAvailableActions | null>(null);


export type ContextAvailablePersons = {
    availablePersons: person[],
    setAvailablePersons: React.Dispatch<React.SetStateAction<person[]>>
};
export const AvailablePersonsContext = createContext<ContextAvailablePersons | null>(null);

export type ContextSearch = {
    searchState: string,
    setSearchState: React.Dispatch<React.SetStateAction<string>>
};
export const SearchContext = createContext<ContextSearch | null>(null);
