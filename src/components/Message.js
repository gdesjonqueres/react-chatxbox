import React from 'react'

const Message = ({ pseudo, children, isUser }) => {
  if (isUser) {
    return (
      <p className='user-message'>
        { children }
      </p>
    )
  }
  else {
    return (
      <p className='not-user-message'>
        <strong>{ pseudo }</strong>: { children }
      </p>
    )
  }
}

export default Message
