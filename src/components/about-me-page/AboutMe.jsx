import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../main/Main';
import { motion } from 'framer-motion';
import {
	StyledPage,
	StyledTextContainer,
	StyledTitle,
	StyledText,
	StyledBackContainer,
	StyledCodeLenguage,
	StyledCodeLenguages,
	StyledIcons
} from './styles';

const AboutMe = () => {
	const xvalue = '100vw';
	const minusxvalue = '-100vw';
	const navigate = useNavigate();
	return (
		<div>
			<StyledTextContainer
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.1 } }}
				transition={{ delay: 0.8 }}
			>
				<StyledBackContainer
					onClick={() => navigate('/')}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2.5 }}
				>
					<img src='/images/arrow.svg' alt='' />
					<StyledText>volver</StyledText>
				</StyledBackContainer>
				<StyledTitle>HOLA, SOY ELISA.</StyledTitle>
				<StyledText>
					TENGO 23 AÑOS Y Me encanta todo lo relacionado con la creación
					gráfica, tengo formación tanto en ilustración y diseño gráfico, como
					diseño UI y desarrollo web Front-End. Me destaco por crear sitios web
					atractivos, optimizados y accesibles para todos los usuarios. Todo
					ello creando un código limpio y bien estructurado. Mi pasión por la
					programación me impulsa a seguir creciendo y enfrentando nuevos
					desafíos en este emocionante campo.
				</StyledText>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.5 }}
				>
					<StyledCodeLenguages>
						<StyledCodeLenguage>html</StyledCodeLenguage>
						<StyledCodeLenguage>css</StyledCodeLenguage>
						<StyledCodeLenguage>sass</StyledCodeLenguage>
						<StyledCodeLenguage>javascript</StyledCodeLenguage>
						<StyledCodeLenguage>React</StyledCodeLenguage>
					</StyledCodeLenguages>
					<StyledText variant='center' bottom='.5rem'>
						ENCUENTRAME EN:
					</StyledText>
					<StyledText variant='bold' bottom='1.8rem'>
						elisadiazartcontact@gmail.com
					</StyledText>
					<StyledText variant='center'>o en:</StyledText>
					<StyledIcons>
						<img src='/images/linkedin.svg' alt='' />
						<img src='/images/git.svg' alt='' />
						<img src='/images/behance.svg' alt='' />
					</StyledIcons>
				</motion.div>
			</StyledTextContainer>
			<StyledPage
				top={'0'}
				initial={{ x: xvalue }}
				animate={{ x: 0 }}
				exit={{ x: xvalue }}
				transition={{ duration: 0.3, delay: 0.1 }}
			></StyledPage>
			<StyledPage
				top={'33.333vh'}
				initial={{ x: minusxvalue }}
				animate={{ x: 0 }}
				exit={{ x: minusxvalue }}
				transition={{ duration: 0.3, delay: 0.1 }}
			></StyledPage>
			<StyledPage
				top={'66.666vh'}
				initial={{ x: xvalue }}
				animate={{ x: 0 }}
				exit={{ x: xvalue }}
				transition={{ duration: 0.3, delay: 0.1 }}
			></StyledPage>
			<Header />
			<Main />
		</div>
	);
};

export default AboutMe;
