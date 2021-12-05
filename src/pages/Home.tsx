import About from '../components/About';
import Header from '../components/Header';
import Inicio from '../components/Inicio';
import Qualification from '../components/Qualification';
import Skills from '../components/Skills';

const Home = () => {
	return (
		<>
			<Header />
			<main className='c-main'>
				<Inicio />
				<About />
				<Skills />
				<Qualification />
			</main>
		</>
	);
};

export default Home;
