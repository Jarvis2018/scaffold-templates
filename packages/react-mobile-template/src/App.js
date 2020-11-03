import React from 'react'
import RouterView from './router'

class App extends React.Component {
  componentDidMount () {
    this.hideLoading()
  }

  hideLoading () {
    document.getElementById('y-loading').style.display = 'none'
  }

  render () {
    return (
      <div id="App">
        <RouterView></RouterView>
      </div>
    )
  }
}

export default App
