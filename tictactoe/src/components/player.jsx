import { useState } from "react";

export default function Player({initialName, symbol,isActive,onNameChange})
{
    const [isEditing,setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)
 
    function handleEditMode()
    {
        setIsEditing(() => !isEditing)
        if(isEditing)
          onNameChange(symbol,playerName)
    }
     function handleChange(event)
     {
        setPlayerName(() => event.target.value)
     }
    return (
        <li className={isActive?'active':undefined}>
              <span className="player">
                {
                   isEditing?(<input type="text" value={playerName} onChange={handleChange}></input>):
                   (<span className="player-name">{playerName}</span>)                   
                }
                <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditMode}>{isEditing?"Save":"Edit"}</button>
            </li>
    );
}