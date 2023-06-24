// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {faqsList: props.faqsList}
  }

  onBtnClicked = id => {
    const {faqsList} = this.state
    const filteredList = faqsList.map(i => {
      if (i.id === id) {
        return {...i, isClicked: !i.isClicked}
      }
      return i
    })
    this.setState({faqsList: filteredList})
  }

  render() {
    const {faqsList} = this.state

    return (
      <div>
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(i => (
            <FaqItem key={i.id} itemDetails={i} onClicked={this.onBtnClicked} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
