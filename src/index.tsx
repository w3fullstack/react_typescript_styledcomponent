import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { Spinner } from './components/shared/spinner'
import { Menu } from './components/menu'
import { ownerMenuItems, normalMenuItems } from './lib/constant'

console.info(`⚛️ ${React.version}`)

const handleChange = (item: MenuDataType) => console.log(item)

const App = () => (
  <>
    <GlobalStyle />
    <Spinner />
    <Menu menuType={1} isFilter={true} isDivider={true} items={ownerMenuItems}  onChange={handleChange} />
    <Menu menuType={2} items={normalMenuItems} onChange={handleChange} />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
