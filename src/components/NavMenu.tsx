interface IProps {
	isShow: boolean;
}

const NavMenu = ({ isShow }: IProps) => {
	return (
		<nav className={`c-nav-menu ${isShow ? 'is-show' : ''}`}>
			<ul className='c-nav-menu__list o-layout-grid'>
				<li className='c-nav-menu__item'>
					<a href='#home' className='c-nav-menu__link js-nav-link active-link'>
						<i className='c-nav-menu__icon uil uil-estate'></i>
						Inicio
					</a>
				</li>
				<li className='c-nav-menu__item'>
					<a href='#about' className='c-nav-menu__link js-nav-link'>
						<i className='c-nav-menu__icon uil uil-user'></i>
						Acerca de mí
					</a>
				</li>
				<li className='c-nav-menu__item'>
					<a href='#skills' className='c-nav-menu__link js-nav-link'>
						<i className='c-nav-menu__icon uil uil-file-alt'></i>
						Skills
					</a>
				</li>
				<li className='c-nav-menu__item'>
					<a href='#services' className='c-nav-menu__link js-nav-link'>
						<i className='c-nav-menu__icon uil uil-briefcase-alt'></i>
						Servicios
					</a>
				</li>
				<li className='c-nav-menu__item'>
					<a href='#portfolio' className='c-nav-menu__link js-nav-link'>
						<i className='c-nav-menu__icon uil uil-scenery'></i>
						Portfolio
					</a>
				</li>
				<li className='c-nav-menu__item'>
					<a href='#contact' className='c-nav-menu__link js-nav-link'>
						<i className='c-nav-menu__icon uil uil-message'></i>
						Contáctame
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavMenu;
