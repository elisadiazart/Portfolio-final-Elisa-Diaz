import { motion } from 'framer-motion';
import { css, styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	background-color: ${COLORS.blackBG};
	padding: 0 3rem;
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

	${props => {
		switch (props.variant) {
			case 'selected':
				return css`
					&::before {
						content: '';
						position: absolute;
						width: calc(100% - 1rem);
						height: 5px;
						background-color: ${COLORS.limaGreen};
						bottom: -7px;
					}
				`;
		}
	}}
`;

const StyledUl = styled(motion.ul)`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.white};
	margin-bottom: 3rem;
	background-color: ${COLORS.blackBG};
	position: fixed;
	padding: 1.5rem 0;
	width: calc(100vw - 6rem);
`;

const StyledNav = styled.nav`
	width: calc(100vw - 6rem);
	height: 100%;
	position: relative;
`;

export { StyledMain, StyledLi, StyledUl, StyledNav };
