import { priorityEnum } from "./enums"

export type noteList = {
    id: number
    name: string
    description: string
    priority: string
    action: number
    date: Date
    invite: number[]
    stage: string
}

export type toDoProperty = {
    name: string
    description: string
    priority: priorityEnum
    invite: number[]
    action: number | null
    time: Date
}

export type person = {
    id: number
    name: string
    avatar: string
    invited: boolean
    picked: boolean
}

export type AvailableActions = {
    id: number
    text: string
    background: string
    picked: boolean
}

export type typeStage = {
    name: string
    state: boolean
}

export type arrayCalendar = {
    id: number
    date: Date
    classes: string
    active: boolean
}

export type selectsTimeState = {
    year: boolean
    month: boolean
    day: boolean
    hour: boolean
    minutes: boolean
}
export type selectedDateObj = {
    year: number
    month: number
    day: number
    hour: number
    minutes: number
}
export type modalContentObj = {
    year: number[]
    month: string[]
    day: number[]
    hour: string[]
    minutes: string[]
}

