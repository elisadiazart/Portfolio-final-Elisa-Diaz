import { StyledMain, StyledImg, StyledH1, StyledText } from './styles';

const Main = () => {
	return (
		<StyledMain>
			<StyledImg src='/images/profile-pic.png' alt='' />
			<StyledH1>Elisa Díaz</StyledH1>
			<StyledText>
				Front-end developer, ui designer, graphic designer.
			</StyledText>
		</StyledMain>
	);
};

export default Main;
