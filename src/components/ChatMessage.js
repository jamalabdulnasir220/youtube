import React from 'react'
import { FaUser } from 'react-icons/fa'

const ChatMessage = ({name, message}) => {

  return (
    <div className='flex items-center shadow-sm p-2'>
      <FaUser />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
