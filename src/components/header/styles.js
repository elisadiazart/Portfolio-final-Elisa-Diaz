import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	background-color: ${COLORS.blackBG};
	@media screen and (min-width: 1024px) {
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
		&::after {
			content: '';
			width: 100%;
			height: 5px;
			position: absolute;
			bottom: 18px;
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

export {
	StyledHeader,
	StyledMenuIcon,
	StyledUl,
	StyledLi,
	StyledNav,
	StyledMenuIconContainer
};
