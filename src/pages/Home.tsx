import About from '../components/About';
import Header from '../components/Header';
import Inicio from '../components/Inicio';

const Home = () => {
	return (
		<>
			<Header />
			<main className='c-main'>
				<Inicio />
				<About />
			</main>
		</>
	);
};

export default Home;
