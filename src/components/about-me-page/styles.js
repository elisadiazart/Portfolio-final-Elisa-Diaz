import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPage = styled(motion.div)`
	position: absolute;
	background-color: ${COLORS.limaGreen};
	width: 100vw;
	height: 33.33vh;
	z-index: 1000;
	top: ${({ top }) => top};
`;

export { StyledPage };
