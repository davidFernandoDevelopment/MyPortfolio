import aboutImage from '../images/about.jpg';

const About = () => {
	return (
		<section id='about' className='c-about o-layout-section'>
			<h2 className='o-layout-section__title'>Acerca de mí</h2>
			<span className='o-layout-section__subtitle'>
				Conocéme un poco mas ...
			</span>
			<div className='c-about__container o-layout-container o-layout-grid'>
				<img className='c-about__img' src={aboutImage} alt='about me' />
				<div className='c-about__data'>
					<p className='c-about__description'>
						Desarrollador web fullstack, con alto conocimiento y 1 año de
						experiencia, trabajando en tecnologias web y diseño ui/ux,
						entregando codigo de calidad.
					</p>
					<div className='c-about__info'>
						<div>
							<span className='c-about__info-title'>01+</span>
							<span className='c-about__info-name'>
								Años <br /> experiencia
							</span>
						</div>
						<div>
							<span className='c-about__info-title'>10+</span>
							<span className='c-about__info-name'>
								Proyectos <br /> realizados
							</span>
						</div>
						<div>
							<span className='c-about__info-title'>01+</span>
							<span className='c-about__info-name'>
								Empresas <br /> trabaje
							</span>
						</div>
					</div>
					<div className='c-about__buttons'>
						<a className='c-button' href='/#' download=''>
							Descargar CV
							<i className='uil uil-download-alt c-button__icon'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
