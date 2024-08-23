import { NavItem } from './NavItem';
import { baseURL } from '../../App';
import './Menu.css';

export default function Menu() {
    const navItems = [
        { label: 'главная', link: `${baseURL}/` },
        { label: 'дрифт-такси', link: `${baseURL}/drift` },
        { label: 'time attack', link: `${baseURL}/timeattack` },
        { label: 'forza karting', link: `${baseURL}/forza` },
    ];

    return (
        <nav>
            <ul className="menu">
                {navItems.map(({ label, link }) => (
                    <NavItem key={label} label={label} link={link} />
                ))}
            </ul>
        </nav>
    );
}