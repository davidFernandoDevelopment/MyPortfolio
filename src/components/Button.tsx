interface IProps {
	children: JSX.Element;
}

const Button = ({ children }: IProps) => {
	return <a className='c-button'>{children}</a>;
};

export default Button;
