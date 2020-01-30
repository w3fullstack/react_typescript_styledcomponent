declare const module: { hot: { accept: () => void } }

interface IconProps {
  color?: string
  className?: string
  size?: number
  onClick?: () => void
}

type FCProps = { className?: string }
type FC<T = {}> = React.FC<Readonly<T & FCProps>>


/** Menu Component */

type User = {
  id: number
  avatar?: string
  name: string
  role?: string
}

type MyStatus = {
  id: number
  name: string
}

type MenuItemData = User & MyStatus;

type MenuItemProps = {
  itemData: MenuItemData
  selected: boolean
  menuType: number
  onClick: () => void
}

interface MenuProps {
  menuType: number
  isFilter?: boolean
  isDivider?: boolean
  items: MenuItemData[]
  onChange?: (item: MenuItemData) => void
}