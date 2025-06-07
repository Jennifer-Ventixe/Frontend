import React from 'react'

const Header = (props) => {
  return (
    <header className="header">
      <div>
        {props.title}
      </div>
    </header>
  )
}

export default Header