import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Overlay extends React.Component {
  render () {
    const { visible, children } = this.props
    return (
      <div
        hidden={!visible}
        className={visible ? 'm-overlay m-overlay--active' : 'm-overlay'}
        onClick={this.props.onClose}>
        {children}
      </div>
    )
  }
}

Overlay.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.element,
  onClose: PropTypes.func
}

export default Overlay
