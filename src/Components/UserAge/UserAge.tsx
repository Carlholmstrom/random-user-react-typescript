import React from 'react'
import { IUserData } from '../../Types/types'

interface IUserAgeComponentProps {
    user: IUserData
}

const UserAge = ({user: {age}} : IUserAgeComponentProps) => {
  return (
    <div><b>{age}</b></div>
  )
}

export default UserAge