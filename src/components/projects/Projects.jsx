import Project from '../project/Project';
import { StyledMain, StyledLi, StyledUl, StyledNav } from './styles';
import { motion } from 'framer-motion';

const Projects = () => {
	return (
		<StyledMain>
			<StyledNav>
				<StyledUl
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, transition: { duration: 0.1 } }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					<StyledLi variant='selected' text='01'>
						MAQUETACIÓN
					</StyledLi>
					<StyledLi text='02'>JAVASCRIPT</StyledLi>
					<StyledLi text='03'>REACT</StyledLi>
				</StyledUl>
			</StyledNav>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.1 } }}
				transition={{ delay: 0.7, duration: 0.6 }}
			>
				<Project
					title='TITULO DEL PROYECTO'
					text='En este proyecto construí una landing page para la empresa ficticia noir bite. Creando un diseño minimalista y sencillo pero a la vez con detalles para hacerla única.
Esta página es responsive para móvil y ordenador.

En esta página he utilizado la metodología BEM a la hora de construir el html y para construir el css he usado Sass para mayor modularización. 
He puesto en practica también Grid en el CSS para alguna sección.
Y por ultimo he usado Javascript para el menú en la versión de móvil.'
				/>
			</motion.div>
		</StyledMain>
	);
};

export default Projects;
