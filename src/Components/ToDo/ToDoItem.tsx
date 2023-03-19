import { FC, useCallback, useContext } from "react"
import {
    AvailableActionsContext,
    AvailablePersonsContext,
    ContextAvailableActions,
    ContextAvailablePersons,
} from "../../Context/Context"
import { noteList } from "../../@types/types"

interface IToDoItem {
    item: noteList
}

export const ToDoItem: FC<IToDoItem> = ({ item }) => {
    const { availableActions } = useContext(AvailableActionsContext) as ContextAvailableActions
    const { availablePersons } = useContext(AvailablePersonsContext) as ContextAvailablePersons

    const formatedTime = useCallback(() => {
        let hours = item.date.getHours()
        let minute = String(item.date.getMinutes())
        let interval = ""
        switch (true) {
            case hours > 0 && hours < 12:
                interval = "a.m."
                break
            case hours > 12 && hours < 23:
                hours = hours - 12
                interval = "p.m."
                break
            case hours === 0:
                hours = 12
                interval = "a.m."
                break
            case hours === 12:
                interval = "p.m."
                break
        }
        switch (true) {
            case Number(minute) < 10:
                minute = "0" + minute
                break
        }
        return `${hours}:${minute} ${interval}`
    }, [item.date])

    return (
        <div className='toDo__task'>
            <div className='task-content'>
                <h2 className='task-name'>{item.name}</h2>
                <p className='task-description'>{item.description}</p>
            </div>
            <div className={`task-priority ${item.priority.name}`}></div>
            <div
                className='task-colorMark'
                style={{
                    background: `${availableActions.find(i => i.id === item.action)?.background}`,
                }}
            ></div>
            <div className='task-contact'>
                <span className='task-time'>{formatedTime()}</span>
                <ul className='task-invited'>
                    {item.invite.map((item, index) => {
                        return (
                            <li
                                key={item}
                                className='task-invited-person'
                                style={{
                                    backgroundImage: `url(${require(`../../Image/${
                                        availablePersons.find(
                                            i => i.id === item
                                        )?.avatar
                                    }`)})`,
                                    right: `${index * 15}px`
                                }}
                            ></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
