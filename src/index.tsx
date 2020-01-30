import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { Spinner } from './components/shared/spinner'
import { Menu, MenuItemData } from './components/menu'
import { ownerMenuItems, normalMenuItems } from './lib/constant'

console.info(`⚛️ ${React.version}`)

const handleChange = (item: MenuItemData) => console.log(item)

const App = () => (
  <>
    <GlobalStyle />
    <Spinner />
    <Menu menuType={"mnu_owner"} isFilter={true} isDivider={true} items={ownerMenuItems}  onChange={handleChange} />
    <Menu menuType={"mnu_status"} items={normalMenuItems} onChange={handleChange} />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
