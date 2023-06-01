// Write your code here
import {Component} from 'react'

import DestinationItemIs from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="Details-card">
          <h1>Destination Search</h1>
          <div className="input-card">
            <input
              className="input"
              type="search"
              placeholder="search"
              onChange={this.onChangeSearchInput}
            />
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="ul-card">
            {searchResults.map(eachItem => (
              <DestinationItemIs userDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
