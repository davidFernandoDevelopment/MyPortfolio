import { ViewportProvider } from './context/viewContext';
import Home from './pages/Home';

function App() {
	return (
		<ViewportProvider>
			<Home />
		</ViewportProvider>
	);
}

export default App;
