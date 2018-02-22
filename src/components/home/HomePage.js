import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './HomePage.css'
import cs from 'classnames'

class HomePage extends React.Component {
  render() {
    return (
      <div className={cs(s.zach, s.posten)}>
        <h1 className={s.title}>Home</h1>
        <NavLink to="about" className="btn btn-primary">
          About
        </NavLink>
      </div>
    )
  }
}

export default HomePage