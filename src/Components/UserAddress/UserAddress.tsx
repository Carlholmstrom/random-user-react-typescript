import React from 'react'
import { IUserData } from '../../Types/types'

interface IUserAddressComponentProps {
    user: IUserData
}

const UserAddress = ({user: {address}}: IUserAddressComponentProps) => {
  return (
    <div>{address}</div>
  )
}

export default UserAddress