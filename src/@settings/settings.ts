import { priorityEnum } from "../@types/enums"
import { AvailableActions, noteList, person, typeStage } from "../@types/types"

export let PossibleNoteList: noteList[] = [
    {
        id: 1,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.HIGHT,
            value: 1
        },
        action: 1,
        date: new Date(2023, 1, 23, 12, 0),
        invite: [1, 3, 4],
        stage: "Undone",
    },
    {
        id: 2,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.MEDIUM,
            value: 2
        },
        action: 3,
        date: new Date(2022, 12, 12, 18, 30),
        invite: [2, 5],
        stage: "Consummation",
    },
    {
        id: 3,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.LOW,
            value: 3
        },
        action: 2,
        date: new Date(2023, 2, 16, 18, 30),
        invite: [1, 2, 3, 4],
        stage: "Undone",
    },
    {
        id: 4,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.MEDIUM,
            value: 2
        },
        action: 3,
        date: new Date(2023, 2, 16, 20, 30),
        invite: [2, 5],
        stage: "Undone",
    },
    {
        id: 5,
        name: "Weekly review",
        description: "Wanda Square E5",
        priority: {
            name: priorityEnum.HIGHT,
            value: 1
        },
        action: 4,
        date: new Date(2023, 2, 16, 20, 0),
        invite: [2],
        stage: "Undone",
    },
    {
        id: 6,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.MEDIUM,
            value: 2
        },
        action: 3,
        date: new Date(2023, 1, 11, 11, 30),
        invite: [2, 5],
        stage: "Consummation",
    },
    {
        id: 7,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.MEDIUM,
            value: 2
        },
        action: 3,
        date: new Date(2022, 12, 12, 18, 30),
        invite: [2, 5],
        stage: "Consummation",
    },
    {
        id: 8,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.MEDIUM,
            value: 2
        },
        action: 3,
        date: new Date(2022, 12, 12, 18, 30),
        invite: [2, 5],
        stage: "Consummation",
    },
    {
        id: 9,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.HIGHT,
            value: 1
        },
        action: 3,
        date: new Date(2022, 12, 12, 18, 30),
        invite: [2, 5],
        stage: "Consummation",
    },
    {
        id: 10,
        name: "Create new project",
        description: "At the conference center",
        priority: {
            name: priorityEnum.NONE,
            value: 4
        },
        action: 3,
        date: new Date(2022, 12, 12, 18, 30),
        invite: [2, 5],
        stage: "Consummation",
    },
]

export let ActionsBackgrounds: string[] = [
    "#C3BEF0",
    "#B9D7EA",
    "#E84A5F",
    "#9DF3C4",
    "#B693FE",
    "#E6A4B4",
    "#6C5B7C",
    "#3FBAC2",
    "#679B9B",
]

export let PossibleActions: AvailableActions[] = [
    {
        id: 1,
        text: "Meeteng",
        background: "",
        picked: false,
    },
    {
        id: 2,
        text: "Design project",
        background: "",
        picked: false,
    },
    {
        id: 3,
        text: "Marketing",
        background: "",
        picked: false,
    },
    {
        id: 4,
        text: "Review",
        background: "",
        picked: false,
    }
]

export let PossiblePersons: person[] = [
    {
        id: 1,
        name: "Alex",
        avatar: "person-1.jpg",
        invited: false,
        picked: false,
    },
    {
        id: 2,
        name: "Mila",
        avatar: "person-2.jpg",
        invited: false,
        picked: false,
    },
    {
        id: 3,
        name: "Anton",
        avatar: "person-3.jpg",
        invited: false,
        picked: false,
    },
    {
        id: 4,
        name: "Kira",
        avatar: "person-4.jpg",
        invited: false,
        picked: false,
    },
    {
        id: 5,
        name: "Den",
        avatar: "person-5.jpg",
        invited: false,
        picked: false,
    }
]

export let PossibleStages: typeStage[] = [
    {
        name: "Undone",
        state: true,
    },
    {
        name: "Consummation",
        state: false,
    },
]