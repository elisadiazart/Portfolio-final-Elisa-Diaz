import {
	StyledA,
	StyledLinks,
	StyledImage,
	StyledCodeTag,
	StyledCodeTags,
	StyledTitle,
	StyledText,
	StyledProject
} from './styles';

const Project = ({ title, text }) => {
	return (
		<StyledProject>
			<StyledLinks>
				<StyledA href=''>live preview</StyledA>
				<StyledA href=''>código en github</StyledA>
			</StyledLinks>
			<StyledImage src='/images/ejemplo-imagen-proyecto.png' alt='' />
			<StyledCodeTags>
				<StyledCodeTag>Html</StyledCodeTag>
				<StyledCodeTag>CSS</StyledCodeTag>
				<StyledCodeTag>SASS</StyledCodeTag>
				<StyledCodeTag>Javascript</StyledCodeTag>
			</StyledCodeTags>
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{text}</StyledText>
		</StyledProject>
	);
};

export default Project;
