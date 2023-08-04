import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	background-color: ${COLORS.blackBG};
`;

const StyledNav = styled.nav`
	height: 140px;
	display: flex;
	justify-content: flex-end;
	position: absolute;
	overflow: hidden;
	background-color: ${COLORS.blackBG};
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
`;

const StyledLi = styled.li`
	text-transform: uppercase;
	padding-top: 95px;
	color: ${COLORS.blackBG};
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-weight: 600;
`;

export {
	StyledHeader,
	StyledMenuIcon,
	StyledUl,
	StyledLi,
	StyledNav,
	StyledMenuIconContainer
};
