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
`;

const StyledMenuIcon = styled.img`
	width: 35px;
	height: 35px;
	filter: grayscale(100%) brightness(0);
	transform: rotate(45deg);
`;

const StyledUl = styled.ul`
	background-color: ${COLORS.limaGreen};
	list-style: none;
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
`;

const StyledMenuIconContainer = styled.div`
	position: absolute;
	z-index: 100;
	padding-right: 3rem;
	padding-top: 30px;
`;

const StyledLi = styled.li`
	text-transform: uppercase;
	padding-top: 95px;
`;

const StyledA = styled.a`
	color: ${COLORS.blackBG};
	text-decoration: none;
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 600;
`;

export {
	StyledHeader,
	StyledMenuIcon,
	StyledUl,
	StyledLi,
	StyledA,
	StyledNav,
	StyledMenuIconContainer
};
