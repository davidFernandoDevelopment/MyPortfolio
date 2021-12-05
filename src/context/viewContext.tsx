import { createContext, FC, useEffect, useState } from 'react';

interface IViewport {
	changeViewport: boolean;
	setChangeViewport?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ViewportContext = createContext<IViewport>({
	changeViewport: false,
});

export const ViewportProvider: FC = ({ children }) => {
	const [changeViewport, setChangeViewport] = useState(false);
	const handleResize = () => setChangeViewport(true);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<ViewportContext.Provider value={{ changeViewport, setChangeViewport }}>
			{children}
		</ViewportContext.Provider>
	);
};
