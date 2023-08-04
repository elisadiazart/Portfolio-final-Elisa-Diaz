import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	// const [modal, setModal] = useState(null);
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				{/* <AboutMe setModal={setModal}>{modal}</AboutMe> */}
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
