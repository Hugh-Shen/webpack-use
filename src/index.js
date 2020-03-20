import React from 'react'
import ReactDOM from 'react-dom'
import { sayHi } from '@utils/index.js' 

let result = 'react'
let say = sayHi()
ReactDOM.render(<div><p>{result}</p><p>{say}</p></div>, document.getElementById('app'))
