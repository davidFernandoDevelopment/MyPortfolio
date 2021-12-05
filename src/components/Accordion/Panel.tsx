import { useRef, useState, useEffect, useContext } from 'react';
import { ViewportContext } from '../../context/viewContext';

interface IPanel {
	isActive: boolean;
	activateTab: () => void;
	label: string;
	children: React.ReactNode;
}

const Panel = ({ label, children, isActive, activateTab }: IPanel) => {
	const { changeViewport, setChangeViewport } = useContext(ViewportContext);
	const [height, setHeight] = useState(0);
	const tab = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const panel = tab.current;

		if (panel) {
			const h = panel.querySelector('.c-panel__content')?.clientHeight;
			console.log(h);
			if (h) setHeight(h);
			if (setChangeViewport) setChangeViewport(false);
		}
	}, [activateTab, changeViewport, setChangeViewport]);

	return (
		<div className='c-panel' ref={tab} aria-expanded={isActive}>
			<div className='c-panel__header' onClick={activateTab}>
				{label}
			</div>
			<div
				className='c-panel__inner'
				style={{
					height: `${isActive ? height : 0}px`,
				}}>
				<div className='c-panel__content'>{children}</div>
			</div>
		</div>
	);
};

export default Panel;
