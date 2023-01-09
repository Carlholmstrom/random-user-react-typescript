import React from 'react'
import { IUserData } from '../../Types/types'

interface IUserNameChangeComponentProps {
    user: IUserData,
    onNameChanged(e: React.ChangeEvent<HTMLInputElement>) : void;
}

const UserNameChange = ({user: {name}, onNameChanged} : IUserNameChangeComponentProps) => {
  return (
    <div>
        <h1>Change the name of '{name}' here</h1>
     <input type="text" value={name} onChange={onNameChanged}/>
   </div>
  )
}

export default UserNameChange