import './style.css';

export default function TodoPanel( {data} ) {
    
    function deleteTodo(event) {
        const ele = event.target.parentNode;
        console.log(ele);
        data[ele.id] = null;
        // data.splice(ele.id, 1);  // deletes only one element
        console.table(data);
        ele.remove();
    }

    function editTodo(event) {
        const ele = event.target.parentNode;
        const spanEle = ele.firstChild;
        spanEle.contentEditable = true;
        spanEle.focus();
        window.getSelection().selectAllChildren(spanEle);
        spanEle.addEventListener('keydown', (e) => handleKeyDown(spanEle, e));
        
        console.log(spanEle);
    }

    function handleKeyDown(element, event) {
        if (event.key === 'Enter' || 
            event.key === 'NumpadEnter') {
                console.log('entered!!')
                element.blur();
                element.contentEditable = false;
                let eleIndex = element.parentNode.id;
                data[eleIndex] = String(element.innerHTML);
                // console.log(element);
                console.table(data);
                // console.log(element.innerHTML);

        }    
    }

    return (
        <>
            <ul>
            {
                data.map((todo, index) => {
                    return (
                        <li key={index} id={index}>
                            <span> { todo } </span>
                            <button type="button" onClick={editTodo} >edit</button>
                            <button type="button" onClick={deleteTodo}>delete</button>
                        </li>
                    );
                })
            }
            </ul>
        </>
    );
}