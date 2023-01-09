import React from 'react'
import { IUserData } from '../../Types/types'

interface IUserNameComponentProps {
    user: IUserData
}

// const UserName = (props: IUserNameComponentProps) => {
//   return (
//     <h1>{props.user.name}</h1>
//   )
// }
const UserName = ({user: { name }}: IUserNameComponentProps) => {
    return (
      <h1>{name}</h1>
    )
  }

export default UserName