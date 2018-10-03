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
      <React.Fragment>
        <h1>@t7/lint-inline</h1>

        <p>
          <a href='https://github.com/t7-components/list-inline/blob/master/source/demo.js'>
            View "demo.js" on GitHub
          </a>
        </p>

        <hr />

        <h2>
          Using &#60;ListInline&#62; in lieu of &#60;ul&#62; creates this inline list
        </h2>

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
      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
