import { AvailableActions, noteList, person, typeStage } from "../@types/types"

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

export let PossibleNoteList: noteList[] = [
    {
        id: 1,
        name: "Create new project",
        description: "At the conference center",
        priority: "Hight",
        action: 1,
        date: new Date(2023, 1, 23, 12, 0),
        invite: [1, 3, 4],
        stage: "Undone",
    },
    {
        id: 2,
        name: "Create new project",
        description: "At the conference center",
        priority: "Medium",
        action: 3,
        date: new Date(2022, 12, 12, 18, 30),
        invite: [2, 5],
        stage: "Consummation",
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