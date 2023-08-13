import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	background-color: ${COLORS.blackBG};
	height: 100vh;
	width: 100vw;
	padding: 0 4rem;
	padding-top: 180px;
`;

const StyledLi = styled.li`
	color: ${COLORS.white};
	font-family: Inter;
	font-size: 14px;
	position: relative;
	padding: 0 0 0 1rem;

	&::after {
		content: '${({ text }) => text}';
		position: absolute;
		font-family: Inter;
		font-size: 10px;
		font-weight: 800;
		color: ${COLORS.limaGreen};
		left: 0;
		top: -5px;
	}
`;

const StyledUl = styled(motion.ul)`
	display: flex;
	justify-content: space-between;

	padding-bottom: 1.5rem;
	border-bottom: 1px solid ${COLORS.white};
`;

export { StyledMain, StyledLi, StyledUl };
