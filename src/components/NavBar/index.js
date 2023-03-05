import './style.css';

export default function NavBar( {visible, setVisible} ) {
    return(
      <>
        <div id="navBar" >
            <button type='button' onClick={() => setVisible(true)} 
                    style={ visible? 
                { backgroundColor: '#787e8a', color: 'white'  } : 
                { backgroundColor: '#444a57', color: 'rgb(187, 184, 184)' } 
            }>
                Todo App
            </button>
            <button type='button' onClick={() => setVisible(false)} 
            style={ visible? 
                { backgroundColor: '#444a57', color: 'rgb(187, 184, 184)' } : 
                { backgroundColor: '#787e8a', color: 'white'  } 
            }>
                Weather App
            </button>
        </div>
      </>
    );
}