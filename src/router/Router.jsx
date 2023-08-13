import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from '../components/about-me-page/AboutMe';
import Main from '../components/main/Main';
import Projects from '../components/projects/Projects';
import Layout from '../layouts/Layout';

const Router = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Layout />}>
					<Route index element={<Main />} />
					<Route path='projects' element={<Projects />} />
					<Route path='about-me' element={<AboutMe />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default Router;
