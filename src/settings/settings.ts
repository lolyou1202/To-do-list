import { AvailableActions, person } from "../types/types"

export let ActionsBackgrounds = [
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