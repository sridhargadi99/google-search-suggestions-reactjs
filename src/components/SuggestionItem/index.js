// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachValue, searchSuggestion} = props
  const {suggestion} = eachValue
  const buttonClick = () => {
    searchSuggestion(suggestion)
  }
  return (
    <li className="list-style">
      <p className="paragraph-style">{suggestion}</p>
      <button
        className="arrow-button-style"
        type="button"
        onClick={buttonClick}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-style"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
