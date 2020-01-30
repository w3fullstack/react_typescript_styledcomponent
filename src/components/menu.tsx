import React, { useState } from 'react'
import styled from 'styled-components'

import { Colors } from '../lib/style-guide'
import { classNames } from '../lib/classnames'
import { randomClassName } from '../lib/rcn'

const MenuItem: FC<MenuItemProps> = ({itemData, selected, menuType, onClick, className}) => (
    <div className={selected ? classNames(className, "selected") : className} onClick={onClick}>
        { menuType === 1 && <div className="avatar"></div> }
        <div className="name">{itemData.name}</div>
        { menuType === 1 && <div className="role">{itemData.role}</div> }
    </div>
)

const Menu: FC<MenuProps> = ({menuType, isFilter, isDivider, items, onChange, className}) => {
    const [selectedItem, setSelectedItem] = useState<MenuItemData | undefined>(undefined);
    const [filteredValue, setFilteredValue] = useState<MenuItemData[]>(items);
    const [filter, setFilter] = useState<string>("");

    const onSelect = (item: MenuItemData) => {
        setSelectedItem(item); onChange && onChange(item)
    };
    const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
        setFilteredValue(newFilter==="" ? items : items.filter(item => item.name.toUpperCase().indexOf(newFilter.toUpperCase())>-1))
    }
    return (
        <div className={className}>
            {  isFilter &&
                <div className="menu-header">
                    <input type="text" placeholder="Filter by name" onChange={onFilter} value={filter} />
                </div>
            } { 
                isDivider && <div className="divider" /> 
            }
            <div className="menu-body">
                { filteredValue.map((item: MenuItemData, index: number) => 
                    <StyledMenuItem 
                        key={index} 
                        itemData={item} 
                        selected={selectedItem===item}
                        menuType={menuType}
                        onClick={() => onSelect(item)}
                    /> 
                )}
            </div>
        </div>
    )
}

const StyledMenu = styled(Menu)`
    align-self: center;
    margin: 0 auto;

    height: 100%;
    background: ${Colors.PureWhite};
    border: 1px solid ${Colors.Border};
    box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06), 0px 4px 16px rgba(50, 132, 225, 0.16);
    border-radius: 4px;

    .menu-header {
        padding: 16px 21px;

        input {
            font-family: 'Inter';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: ${Colors.INPUT};

            &:focus {
                outline: none;
            }
        }
    }
    .divider {
        background: ${Colors.BG4};
        height: 1px;
    }
    .menu-body {
        padding: 10px 0px 10px;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0px 21px;
    cursor: pointer;

    .avatar {
        border-radius: 100px;
        background-size: cover;
        background-color: red;
        resize: both;
        width: 22px;
        height: 22px;
        margin-right: 11px;
        background-image: url(${props => props.itemData.avatar !== "" ? props.itemData.avatar : "https://image.flaticon.com/icons/svg/194/194938.svg"});
    }
    .name {
        margin-right: 11px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #192533;
    }
    .role {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #60789A;
    }

    &:hover {
        background: ${Colors.BG3};
    }

    &.selected {
        background: #1E75D8;
        .name {
            color: ${Colors.PureWhite} !important;
        }
        .role {
            color: #D1E3F8 !important;
        }
    }
`;

export { StyledMenu as Menu }
