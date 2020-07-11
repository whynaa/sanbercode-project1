import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css'; 

function useMyCustomHooks(initial) {
  const [state, setState] = useState(initial)

  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount")
  }, [])

  //componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate")
  }, [state])

  return [state, setState]
}

export default function MyHome() {
  const [state, setState] = useMyCustomHooks({
    // state awal untuk menampilkan tulisan hello
    myState : 'Hello!'
  })

  const clicked = () => {
    //saat tombol learn react di klik, kalimat sapaan berubah menjadi hello my friend, karena sama2 telah belajar react
    setState({ myState: 'Hello my friend!' })
    alert("Go to the React Docs Page");
  }

  //componentWillUnmount
  useEffect(() => {
    return(
      console.log('Good Bye!')
    )
  }, [state])

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state.myState} This is my <code>React App</code> from anything i've learned
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={clicked}
        >
          Learn React
        </a>
      </div>
    </div>
  );
}
