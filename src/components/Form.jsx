import { useRef } from 'react';

const Form = () => {
	const modal = useRef();

	const toggleModal = () => {
		modal.current.classList.toggle('is-active');
	};

	const onChangeTheme = () => {
		document.getElementsByTagName('body').classList.remove()
	};

	return (
		<>
			<form className='c-form c-form--labels-right'>
				<div className='c-form__field'>
					<label className='c-form__label'>Name</label>
					<input type='text' className='c-form__input' />
				</div>
				<div className='c-form__field'>
					<label className='c-form__label u-tal'>Email</label>
					<input type='email' className='c-form__input' />
				</div>
				<div className='c-form__field'>
					<label className='c-form__label'>Message</label>
					<textarea type='text' className='c-form__textarea' />
				</div>
				<div className='c-form__field'>
					<button type='submit' className='c-form__submit'>
						Send
					</button>
				</div>
				<div className='c-form__field u-tac'>
					<button
						type='button'
						className='c-button c-button--big js-toggle-modal'
						onClick={toggleModal}>
						Abrir ventana modal
					</button>
				</div>
				<div className='c-form__field c-form__field--last u-tac u-none@sm'>
					<button
						type='button'
						className='c-button c-button--big'
						data-theme='t-light'
						onClick={onChangeTheme}>
						Tema light
					</button>
					<button
						type='button'
						className='c-button c-button--big'
						data-theme='t-dark'
						onClick={onChangeTheme}>
						Tema dark
					</button>
				</div>
			</form>

			<div className='c-modal js-modal' ref={modal}>
				<div className='c-modal__inner'>
					<h4 className='c-modal__title'>Soy un modal</h4>
					<div className='c-modal__wrapper-button'>
						<button
							onClick={toggleModal}
							className='c-modal__button c-button c-button--big js-toggle-modal'>
							Cerrar modal
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
