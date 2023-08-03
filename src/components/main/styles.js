import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	background-color: ${COLORS.blackBG};
	height: 100vh;
	width: 100vw;
	color: ${COLORS.white};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImg = styled.img`
	width: 106px;
	height: 108px;
	margin-bottom: 0;
`;

const StyledH1 = styled.h1`
	text-transform: uppercase;
	color: ${COLORS.limaGreen};
	font-family: 'EB Garamond', serif;
	font-weight: 400;
	font-style: italic;
	font-size: 3rem;
	text-align: center;
	margin-top: 2.1rem;
	margin-bottom: 1.5rem;
`;

const StyledText = styled.p`
	font-family: 'Inter', sans-serif;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 400;
	width: 180px;
	text-align: center;
	margin: 0 auto;
`;

const StyledCopy = styled.p`
	display: block;
	width: 150px;
	font-family: 'Inter', sans-serif;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 400;
	position: absolute;
	bottom: 3rem;
	left: 3.5rem;
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	transform: translateY(-2rem);
`;

export { StyledMain, StyledImg, StyledH1, StyledText, StyledCopy, StyledDiv };
