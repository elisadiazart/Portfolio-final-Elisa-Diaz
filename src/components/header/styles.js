import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	background-color: ${COLORS.blackBG};
	@media screen and (min-width: 1024px) {
		position: fixed;
		width: 100%;
	}
`;

const StyledNav = styled(motion.nav)`
	height: 140px;
	display: flex;
	justify-content: flex-end;
	position: absolute;
	overflow: hidden;
	background-color: ${COLORS.blackBG};
	position: fixed;
	z-index: 10;
	@media screen and (min-width: 1024px) {
		position: static;
		width: 70%;
		margin: auto;
	}
`;

const StyledMenuIcon = styled.img`
	width: 35px;
	height: 35px;
	transform: rotate(${({ rotate }) => rotate});
	transition: transform 0.2s;
`;

const StyledUl = styled.ul`
	background-color: ${COLORS.limaGreen};
	margin: 0;
	top: 0;
	left: 0;
	width: 100vw;
	padding: 0;
	display: flex;
	height: 140px;
	justify-content: center;
	gap: 2rem;
	z-index: 0;
	transform: translate(${({ translate }) => translate});
	transition: transform 0.2s;
	@media screen and (min-width: 1024px) {
		transform: translate(0);
		background-color: ${COLORS.blackBG};
		justify-content: left;
		height: auto;
		width: 100%;
	}
`;

const StyledMenuIconContainer = styled.div`
	position: absolute;
	z-index: 100;
	padding-right: 3rem;
	padding-top: 30px;

	&::after {
		content: 'Menu';
		color: ${COLORS.limaGreen};
		position: absolute;
		bottom: -1.6rem;
		right: calc(50% + 0.15rem);
		text-transform: uppercase;
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 500;
	}

	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const StyledLi = styled.li`
	text-transform: uppercase;
	padding-top: 95px;
	color: ${COLORS.blackBG};
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-weight: 600;
	@media screen and (min-width: 1024px) {
		color: white;
		font-family: Inter;
		font-size: 14px;
		font-weight: 400;
		position: relative;
		padding-top: 0;
		&::after {
			content: '';
			width: 100%;
			height: 5px;
			position: absolute;
			bottom: -0.5rem;
			background-color: ${COLORS.limaGreen};
			left: 0;
			transform: scale(0, 100%);
			transition: transform 0.2s;
		}
		&:hover {
			color: ${COLORS.limaGreen};
			&::after {
				transform: scale(100%, 100%);
			}
		}
	}
`;

const StyledDiv = styled.div`
	width: 100%;
	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: flex-start;
		padding-top: 5rem;
		color: ${COLORS.blackBG};
	}
`;

const StyledSmallText = styled.p`
	display: none;
	@media screen and (min-width: 1024px) {
		display: block;
		width: 220px;
		font-family: 'Inter', sans-serif;
		text-transform: uppercase;
		font-size: 12px;
		font-weight: 400;
		color: white;
		text-align: right;
	}
`;

export {
	StyledHeader,
	StyledMenuIcon,
	StyledUl,
	StyledLi,
	StyledNav,
	StyledMenuIconContainer,
	StyledDiv,
	StyledSmallText
};
