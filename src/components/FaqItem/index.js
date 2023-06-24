// Write your code here.
const FaqItem = props => {
  const {itemDetails, onClicked} = props
  const {id, questionText, answerText, isClicked} = itemDetails

  const onBtnClick = () => {
    onClicked(id)
  }

  return (
    <li type="none">
      <h1>{questionText}</h1>
      <button onClick={onBtnClick} type="button">
        {isClicked ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
            alt="minus"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
          />
        )}
      </button>
      {isClicked ? (
        <div>
          <p>{answerText}</p>
        </div>
      ) : null}
    </li>
  )
}

export default FaqItem
