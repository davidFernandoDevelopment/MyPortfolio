import { useRef } from 'react';
import { IDataLinkNav } from '../interfaces/IDataLinkNav';

interface IProps {
	isShow: boolean;
	fnShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const items: IDataLinkNav[] = [
	{
		href: '#home',
		title: 'Inicio',
		icon: 'estate',
		default: true,
	},
	{
		href: '#about',
		title: 'Acerca de mí',
		icon: 'user',
	},
	{
		href: '#skills',
		title: 'Skills',
		icon: 'file-alt',
	},
	{
		href: '#services',
		title: 'Servicios',
		icon: 'briefcase-alt',
	},
	{
		href: '#portfolio',
		title: 'Portfolio',
		icon: 'scenery',
	},
	{
		href: '#contact',
		title: 'Contáctame',
		icon: 'message',
	},
];

const NavMenu = ({ isShow, fnShow }: IProps) => {
	const navMenu = useRef<HTMLElement>(null);

	const hiddenNavMenu = (): void => {
		navMenu.current?.classList.remove('is-show');
		fnShow(false);
	};

	return (
		<nav ref={navMenu} className={`c-nav-menu ${isShow ? 'is-show' : ''}`}>
			<ul className='c-nav-menu__list o-layout-grid'>
				{items.map((item) => (
					<li
						key={item.href}
						className='c-nav-menu__item'
						onClick={hiddenNavMenu}>
						<a
							href={`#${item.href}`}
							className={`c-nav-menu__link ${
								item?.default ? 'active-link' : ''
							}`}>
							<i className={`c-nav-menu__icon uil uil-${item.icon}`}></i>
							{item.title}
						</a>
					</li>
				))}
			</ul>
			<i
				className='uil uil-times c-nav-menu__close'
				onClick={hiddenNavMenu}></i>
		</nav>
	);
};

export default NavMenu;
