import { priorityEnum } from "./enums";

export type actionsContetnt = {
    text: string;
    background: string;
    picked: boolean;
};

export type person = {
    id: number;
    name: string;
    avatar: string;
    invited: boolean;
    picked: boolean;
};

export type noteList = {
    id: number;
    name: string;
    description: string;
    priority: string;
    action: string;
    date: number[];
    invite: number[];
    stage: string;
};

export type arrayCalendar = {
    id: number;
    date: Date;
    classes: string;
    active: boolean;
};

export type selectsTimeState = {
    year: boolean;
    month: boolean;
    day: boolean;
    hour: boolean;
    minutes: boolean;
};
export type selectedDateObj = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minutes: number;
};
export type modalContentObj = {
    year: number[];
    month: string[];
    day: number[];
    hour: string[];
    minutes: string[];
};

export type toDoProperty = {
    name: string;
    description: string;
    priority: priorityEnum;
    invite: number[];
    actions: number[];
    time: Date;
};

export type AvailableActions = {
    id: number;
    text: string;
    background: string;
    picked: boolean;
};
