import {
	StyledMain,
	StyledImg,
	StyledH1,
	StyledText,
	StyledCopy,
	StyledDiv,
	StyledFlowers
} from './styles';

const Main = () => {
	return (
		<StyledMain>
			<StyledDiv
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.1 } }}
				transition={{ delay: 0.4, duration: 0.6 }}
			>
				<StyledImg src='/images/profile-pic.png' alt='Imagen de perfil.' />
				<div>
					<StyledH1>Elisa Díaz</StyledH1>
					<StyledText>
						Front-end developer, ui designer, graphic designer.
					</StyledText>
				</div>
				<StyledFlowers>
					<img src='/public/images/flower.svg' alt='' />
					<img src='/public/images/flower.svg' alt='' />
				</StyledFlowers>
			</StyledDiv>
			<StyledCopy
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.1 } }}
				transition={{ delay: 0.9, duration: 0.6 }}
			>
				©2023 todos los derechos reservados
			</StyledCopy>
		</StyledMain>
	);
};

export default Main;
