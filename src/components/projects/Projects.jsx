import { StyledMain, StyledLi, StyledUl } from './styles';

const Projects = () => {
	return (
		<StyledMain>
			<nav>
				<StyledUl
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, transition: { duration: 0.1 } }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					<StyledLi text='01'>MAQUETACIÓN</StyledLi>
					<StyledLi text='02'>JAVASCRIPT</StyledLi>
					<StyledLi text='03'>REACT</StyledLi>
				</StyledUl>
			</nav>
		</StyledMain>
	);
};

export default Projects;
