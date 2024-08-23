import { NavLink } from 'react-router-dom';
import '../../index.css';

export interface INavItemProps {
    label: string,
    link: string,
}

const activeClassName = ({ isActive }: {isActive: boolean}) => 
    ['menu__item-link', isActive ? 'menu__item-link-active' : null]
    .filter(Boolean)
    .join(' ');

export const NavItem = ({ label, link }: INavItemProps) => {
    return (
        <li className='menu__item'>
            <NavLink className={activeClassName} to={link} end>
                {label.toUpperCase()}
            </NavLink>
        </li>
    );
};
