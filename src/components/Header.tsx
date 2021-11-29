import { useState } from 'react';

import NavMenu from './NavMenu';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = (): void => setToggle(true);

	return (
		<header className='c-header'>
			<div className='c-header__container o-layout-container'>
				<a href='/#' className='c-header__logo'>
					David Fernando
				</a>
				<NavMenu isShow={toggle} fnShow={setToggle} />
				<div className='c-header__buttons'>
					<i className='uil uil-moon c-header__theme'></i>
					<div className='c-header__toggle' onClick={toggleMenu}>
						<i className='uil uil-apps'></i>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
