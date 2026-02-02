import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank',
//     },
//     children:'Click me to visit google.com '
// }
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click me to visit google.com
  </a>
)
const anotherUser = "chai aur React"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click me to visit google.com ',
  anotherUser,

)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
 
  reactElement
)
