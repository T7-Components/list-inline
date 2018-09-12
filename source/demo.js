// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// UI components.
import ListInline from './'

// CSS.
import './demo.css'
import './index.css'

// Define class.
class Demo extends React.Component {
  render () {
    // Expose UI.
    return (
      <ListInline>
        <li>
          List Item 1
        </li>
        <li>
          List Item 2
        </li>
        <li>
          List Item 3
        </li>
      </ListInline>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
