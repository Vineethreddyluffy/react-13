import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {name: 'Please Login', bName: 'Login'}

  onButton = () => {
    const {bName} = this.state
    if (bName === 'Login') {
      this.setState({name: 'Welcome User'})
      this.setState({bName: 'Logout'})
    } else {
      this.setState({name: 'Please Login'})
      this.setState({bName: 'Login'})
    }
  }

  render() {
    const {name} = this.state
    const {bName} = this.state
    return (
      <div className="cont">
        <div className="card">
          <h1 className="heading">{name}</h1>
          <button className="button" type="button" onClick={this.onButton}>
            {bName}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
