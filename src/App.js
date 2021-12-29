import React, {useState} from 'react'
import Icon from './Icon/Icon'
// React toastify
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const App = () => {

const tiktokArray = new Array(9).fill("")
const [winMessage, setWinMessage] = useState("")
const [isCross, setIsCross] = useState(true)

// Restart tthe game  
const restartGame = () => {
    tiktokArray.fill("") 
    setWinMessage("") 
    setIsCross(true)
}

// win Logic 
const winLogic = () => {
    if(tiktokArray[0] == tiktokArray[1] && tiktokArray[0] == tiktokArray[2] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[3] == tiktokArray[4] && tiktokArray[3] == tiktokArray[5] && tiktokArray[3] !== ""){
        console.log("winner is", tiktokArray[3])
      }
      else if(tiktokArray[6] == tiktokArray[7] && tiktokArray[6] == tiktokArray[8] && tiktokArray[6] !== ""){
        console.log("winner is", tiktokArray[6])
      }
      //colums 
      else if(tiktokArray[0] == tiktokArray[3] && tiktokArray[0] == tiktokArray[6] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[1] == tiktokArray[4] && tiktokArray[1] == tiktokArray[7]  && tiktokArray[1] !== ""){
        console.log("winner is", tiktokArray[1])
      }
      else if(tiktokArray[2] == tiktokArray[5] && tiktokArray[2] == tiktokArray[8] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
      //diagnoles 
      else if(tiktokArray[0] == tiktokArray[4] && tiktokArray[0] == tiktokArray[8] && tiktokArray[0] !== ""){
        console.log("winner is", tiktokArray[0])
      }
      else if(tiktokArray[2] == tiktokArray[4] && tiktokArray[2] == tiktokArray[6] && tiktokArray[2] !== ""){
        console.log("winner is", tiktokArray[2])
      }
}

// fill tik tok array  
const fillTiktokArray = (index) => {
    if(winMessage !== ""){
        return  toast.error('Game has already ended', {
            position: "bottom-center"
            });
    }
    if(tiktokArray[index] !== ""){
        return  toast.error('This box is already filled', {
            position: "bottom-center"
            });
    }
    else{
        tiktokArray[index] =  isCross ? "cross" : "circle"
        setIsCross(!isCross)
    }
    winLogic()
}

// design of tik tok game

    return(
          
        // put some value in them  
        // lets connect it with a button 
        <div>
          <h1>Tic Tac Toe</h1>
      <div className="board">
      <div data-index="1" className="tile right-border bottom-border">X</div>
      <div data-index="2" className="tile right-border bottom-border"></div>
      <div data-index="3" className="tile bottom-border"></div>
      <div data-index="4" className="tile right-border bottom-border"></div>
      <div data-index="5" className="tile right-border bottom-border">x</div>
      <div data-index="6" className="tile bottom-border"></div>
      <div data-index="7" className="tile right-border"></div>
      <div data-index="8" className="tile right-border"></div>
      <div data-index="9" className="tile">x</div>
      
    </div>
    <button >Play</button>
  
        </div>


    )
}
export default App