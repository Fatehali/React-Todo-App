import './style.css';
import { useState, useEffect, useMemo } from 'react';
import TodoPanel from '../TodoPanel';

export default function InputBox() {
    
    const [inputText, setInputText] = useState();
    const [todoArr, setTodoArr] = useState([]);

    useMemo(()=> {
        console.log(inputText);
        if (inputText) {
            setTodoArr( (todos) => [...todos, inputText]);  
        }
    }, [inputText]);

    // for developement purpose only
    useEffect(() => {
        console.table(todoArr);
    }, [todoArr]);

    function handleKeyDown(event) {
        if (event.key === 'Enter' || 
            event.key === 'NumpadEnter') {
                setInputText(event.target.value);
                event.target.value = "";
        }    
    }

    return (
        <>
            <input type="text" id="inputBox" placeholder='I want to read book...'
                    onKeyDown={ handleKeyDown } autoFocus/>
            
            <TodoPanel data={ todoArr } />
        </>
    );
}