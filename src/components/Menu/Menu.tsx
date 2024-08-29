import { NavItem } from './NavItem';
import './Menu.css';

export default function Menu() {
    const navItems = [
        { label: 'главная', link: '/' },
        { label: 'дрифт-такси', link: '/drift' },
        { label: 'time attack', link: '/timeattack' },
        { label: 'forza karting', link: '/forza' },
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