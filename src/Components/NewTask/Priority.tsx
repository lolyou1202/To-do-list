import { useRef } from "react"

interface PriorityProps {
    priority: string
    setPriority: (value: string) => void
}

const Priority: React.FC<PriorityProps> = ({priority, setPriority}) => {
    const track = useRef(null)

    function handlerChange (e: React.MouseEvent<HTMLElement>) {
        const target = e.target as HTMLElement;
        switch (target.textContent) {
            case 'Hight':
                setPriority('Hight')
                break
            case 'Medium':
                setPriority('Medium')
                break
            case 'Low':
                setPriority('Low')
                break
            case 'None':
                setPriority('None')
                break
        }
    }

    return (
        <div className="newTask__block newTask__priority">
            <p>Priority</p>
            <ul className="newTask__priority-tabs">
                <li 
                    className={'priority-item' + (priority === 'Hight' ? ' active' : '')}
                    onClick={handlerChange}
                >
                    Hight
                </li>
                <li 
                    className={'priority-item' + (priority === 'Medium' ? ' active' : '')}
                    onClick={handlerChange}
                >
                    Medium
                </li>
                <li 
                    className={'priority-item' + (priority === 'Low' ? ' active' : '')}
                    onClick={handlerChange}
                >
                    Low
                </li>
                <li 
                    className={'priority-item' + (priority === 'None' ? ' active' : '')}
                    onClick={handlerChange}
                >
                    None
                </li>
            </ul>
            <div 
                className={`newTask__priority-track ${priority}`}
                ref={track}
            ></div>
        </div>
    )
}
export default Priority