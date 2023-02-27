interface TextareaItemProps {
    state: string;
    setState: (value: string) => void;
    placeholder: string
}

const TextareaItem: React.FC<TextareaItemProps> = ({state, setState, placeholder}) => {
    
    const handlerTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState(e.target.value)
        
        e.target.style.cssText = 'height:auto; padding:0';
        e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
    }

    return (
        <textarea
            className="newTask__mainInfo-textarea"
            placeholder={placeholder}
            rows={1}
            value={state}
            onChange={handlerTextareaChange}
        >
        </textarea>
    )
}

export default TextareaItem
