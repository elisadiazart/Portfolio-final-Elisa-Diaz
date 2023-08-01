import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	background-color: ${COLORS.blackBG};
	height: 100vh;
	display: flex;
	flex-direction: column;
	color: ${COLORS.white};
`;

const StyledImg = styled.img`
	width: 106px;
	height: 108px;
	margin: 3rem auto;
	margin-bottom: 0;
	padding-top: 140px;
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

export { StyledMain, StyledImg, StyledH1, StyledText };
