import { ISocial } from '../interfaces/IDataSocial';
import Image from '../images/perfil.png';

const socials: ISocial[] = [
	{ link: 'https://google.com', icon: 'linkedin' },
	{ link: 'https://google.com', icon: 'dribbble' },
	{ link: 'https://google.com', icon: 'github' },
];

const Inicio = () => {
	return (
		<section className='c-home o-layout-section'>
			<div className='c-home__container o-layout-container'>
				<div className='c-home__content o-layout-grid'>
					<ul className='c-home__social'>
						{socials.map((s) => (
							<a
								key={s.icon}
								href={`#${s.link}`}
								className='c-home__social-icon'>
								<i className={`uil uil-${s.icon}`}></i>
							</a>
						))}
					</ul>
					<div className='c-home__img'>
						<svg
							className='c-home__blob'
							viewBox='0 0 151 135'
							xmlns='http://www.w3.org/2000/svg'>
							<mask
								id='mask0_66_15'
								maskUnits='userSpaceOnUse'
								mask-type='alpha'
								x={0}
								y={0}
								width={150}
								height={135}>
								<path
									d='M5.77539 29.9223C-14.9219 68.2807 34.0924 133.543 74.6742 134.058C115.256 134.574 165.059 68.7963 145.174 29.9223C125.29 -8.95162 26.4727 -8.43601 5.77539 29.9223Z'
									fill='#7B61FF'
								/>
							</mask>
							<g mask='url(#mask0_66_15)'>
								<path d='M0 -14H168V148H0V-14Z' />
								<image
									x={-42}
									y={-5}
									className='c-home__blob-img'
									xlinkHref={Image}
								/>
							</g>
						</svg>
					</div>
					<div className='c-home__data'>
						<h1 className='c-home__title'>Hola, soy David</h1>
						<h3 className='c-home__subtitle'>Frontend Developer</h3>
						<p className='c-home__description'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
							distinctio beatae ea ipsum facilis adipisci expedita quaerat
							quibusdam dolorum.
						</p>
						<a href='/#' className='c-button'>
							Contáctame
							<i className='uil uil-message c-button__icon'></i>
						</a>
					</div>
					<div className='c-home__scroll'>
						<a href='#about' className='c-home__scroll-button'>
							<i className='uil uil-mouse-alt c-home__scroll-mouse'></i>
							<span className='c-home__scroll-name'>Scroll down</span>
							<i className='uil uil-arrow-down c-home__scroll-arrow'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Inicio;
