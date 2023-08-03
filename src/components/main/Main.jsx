import {
	StyledMain,
	StyledImg,
	StyledH1,
	StyledText,
	StyledCopy,
	StyledDiv
} from './styles';

const Main = () => {
	return (
		<StyledMain>
			<StyledDiv>
				<StyledImg src='/images/profile-pic.png' alt='Imagen de perfil.' />
				<StyledH1>Elisa Díaz</StyledH1>
				<StyledText>
					Front-end developer, ui designer, graphic designer.
				</StyledText>
			</StyledDiv>
			<StyledCopy>©2023 todos los derechos reservados</StyledCopy>
		</StyledMain>
	);
};

export default Main;
