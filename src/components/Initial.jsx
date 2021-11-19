import logo from '../logo.svg';

function Initial() {
	return (
		<header className='c-app'>
			<img src={logo} className='c-app__logo' alt='logo' />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a
				className='c-app__link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'>
				Learn React
			</a>
		</header>
	);
}

export default Initial;
