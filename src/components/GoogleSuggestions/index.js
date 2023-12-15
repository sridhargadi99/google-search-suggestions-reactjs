// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  inputSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  searchSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const finalList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo-style"
            alt="google logo"
          />
          <div className="suggestion-container">
            <div className="img-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchIcon-style"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-style"
                value={searchInput}
                onChange={this.inputSearchValue}
              />
            </div>
            <ul className="list-container">
              {finalList.map(eachList => (
                <SuggestionItem
                  searchSuggestion={this.searchSuggestion}
                  eachValue={eachList}
                  key={eachList.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
