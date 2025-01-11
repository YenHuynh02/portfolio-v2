import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MenuItems {
    title: string;
    icon?: any;
    url: string;
}

interface MenuItemsProps {
    items: MenuItems;
    activeItem: string;
    setActiveItem: (title: string) => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, activeItem, setActiveItem }) => {
    return (
        <li>
            <span>
                {items.icon && <FontAwesomeIcon icon={items.icon} />}
            </span>
            <a
                href={items.url}
                className={activeItem === items.title ? 'active' : ''}
                onClick={(e) => {
                    setActiveItem(items.title)
                    e.preventDefault();
                }
                }
            >
                {items.title}
            </a>
        </li >
    );
}

export default MenuItems;