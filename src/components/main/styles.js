import { motion } from 'framer-motion';
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
	@media screen and (min-width: 1024px) {
	}
`;

const StyledImg = styled.img`
	width: 106px;
	height: 108px;
	margin-bottom: 0;
	@media screen and (min-width: 1024px) {
		width: 170px;
		height: 170px;
	}
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
	@media screen and (min-width: 1024px) {
		font-size: 4.5rem;
		font-weight: 300;
		margin-bottom: 0;
		margin-top: 0;
		outline: 0;
		padding: 1rem 4rem;
		transition: outline 0.2s;
		cursor: default;

		&:hover {
			outline: 1px solid ${COLORS.limaGreen};
			border-radius: 100px;
			transition: outline 0.7s;
		}
	}
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

const StyledCopy = styled(motion.p)`
	display: block;
	width: 150px;
	font-family: 'Inter', sans-serif;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 400;
	position: absolute;
	bottom: 3rem;
	left: 3.5rem;
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const StyledDiv = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	transform: translateY(-2rem);
	@media screen and (min-width: 1024px) {
		transform: translateY(2rem);
		display: flex;
		flex-direction: column-reverse;
		gap: 4rem;
		width: 100vw;
	}
`;

const StyledFlowers = styled.div`
	display: none;
	@media screen and (min-width: 1024px) {
		display: flex;
		width: 100%;
		justify-content: space-between;
		width: 72%;
		position: absolute;
		transform: translateY(-50%);
		top: calc(50% + 1rem);
	}
`;

export {
	StyledMain,
	StyledImg,
	StyledH1,
	StyledText,
	StyledCopy,
	StyledDiv,
	StyledFlowers
};
