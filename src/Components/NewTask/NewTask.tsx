import React, { FC, useEffect, useState, useContext, useRef } from 'react'
import { toDoProperty } from '../../@types/types'
import {
    AvailableActionsContext,
    AvailablePersonsContext,
    ContextAvailableActions,
    ContextAvailablePersons,
    PropertyToDoContext,
} from '../../Context/Context'
import { MainInfo } from './mainInfo/MainInfo'
import { Buttons } from './buttons/Buttons'
import { Time } from './time/Time'
import { Priority } from './priority/Priority'
import { Persone } from './persone/Persone'
import { priorityEnum } from '../../@types/enums'
import { useFillActions } from '../../CustomHooks/useFillActions'
import { useFillPersons } from '../../CustomHooks/useFillPersons'

interface NewTaskProps {
    newTaskModalState: boolean
    setNewTaskModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewTask: FC<NewTaskProps> = ({
    newTaskModalState,
    setNewTaskModalState,
}) => {
    const { availableActions } = useContext(
        AvailableActionsContext
    ) as ContextAvailableActions
    const { availablePersons } = useContext(
        AvailablePersonsContext
    ) as ContextAvailablePersons

    const IdPickedActions = useFillActions(availableActions)
    const IdPickedPersons = useFillPersons(availablePersons)

    //const ref = useRef<HTMLDivElement>(null)
    //const dragControls = useDragControls()

    const [propertyToDo, setProppertyToDo] = useState<toDoProperty>({
        name: '',
        description: '',
        priority: {
            name: priorityEnum.HIGHT,
            value: 1,
        },
        invite: [],
        action: null,
        time: new Date(),
    })

    useEffect(() => {
        if (IdPickedActions) {
            setProppertyToDo(prev => ({
                ...prev,
                action: IdPickedActions,
            }))
        }
    }, [IdPickedActions])
    useEffect(() => {
        if (IdPickedPersons.length !== 0) {
            setProppertyToDo(prev => ({
                ...prev,
                invite: IdPickedPersons,
            }))
        }
    }, [IdPickedPersons])

    return (
        <PropertyToDoContext.Provider
            value={{ propertyToDo, setProppertyToDo }}
        >
            <div
                //ref={ref}
                //drag='y'
                //dragControls={dragControls}
                //dragListener={false}
                //dragMomentum={false}
                //onDragEnd={(_, info) => {
                //    console.log(info.point.y)
                //    console.log(document.documentElement.clientWidth / 1.5)
                //    if (info.point.y > document.documentElement.clientWidth / 1.5) {
                //        setNewTaskModalState(false)
                //        if (ref.current) {
                //            console.log(123)
                //            ref.current.style.transform = "translate(0px)"
                //        }
                //    } else {

                //    }
                //}}
                className={'newTask-modal' + (newTaskModalState ? ' active' : '')}
            >
                <div
                    //onPointerDown={e => dragControls.start(e)}
                    className='navButton-Area'
                    onClick={() => setNewTaskModalState(false)}
                >
                    <div className='navButton'></div>
                </div>
                <div className='newTask-modal-container'>
                    <MainInfo />
                    <Priority />
                    <Time />
                    <Persone />
                    <Buttons setNewTaskModalState={setNewTaskModalState} />
                </div>
            </div>
        </PropertyToDoContext.Provider>
    )
}
