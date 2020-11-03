import React from 'react'
import './index.scoped.css'
import { Result } from 'antd-mobile'
import Logo from '../../assets/logo.png'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'react-mobile-template'
    }
  }

  render () {
    return (
      <div className='index-wrapper'>
        <h1 className='title'>{this.state.text}</h1>
        <img src={Logo} alt="Logo"/>
        <Result
          title="react-mobile-template"
          message="react移动端H5 template"
        />
      </div>
    )
  }
}

export default Index
