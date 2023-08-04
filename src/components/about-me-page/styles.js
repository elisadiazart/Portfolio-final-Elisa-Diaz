import { motion } from 'framer-motion';
import { css, styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPage = styled(motion.div)`
	position: absolute;
	background-color: ${COLORS.limaGreen};
	width: 100vw;
	height: 33.5vh;
	z-index: 100;
	top: ${({ top }) => top};
`;

const StyledTextContainer = styled(motion.div)`
	position: absolute;
	z-index: 1000;
	padding: 3.7rem 3rem;
	transform: translate(-50%, -50%);
	width: calc(100% -1rem);
	top: 50%;
	left: 50%;
`;

const StyledTitle = styled.h2`
	text-transform: uppercase;
	font-family: 'EB Garamond', serif;
	font-size: 2rem;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 0.5rem;
`;

const StyledText = styled.p`
	font-family: Inter;
	font-size: 0.85rem;
	font-weight: 600;
	line-height: normal;
	text-transform: uppercase;
	${props => {
		switch (props.variant) {
			case 'center':
				return css`
					text-align: center;
					margin-bottom: ${({ bottom }) => bottom};
				`;
			case 'bold':
				return css`
					text-align: center;
					font-weight: 700;
					margin-bottom: ${({ bottom }) => bottom};
				`;
		}
	}}
`;

const StyledBackContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
	gap: 0.4rem;
`;

const StyledCodeLenguage = styled.div`
	display: inline-block;
	text-align: center;
	font-family: Inter;
	font-size: 14px;
	font-weight: 800;
	text-transform: uppercase;
	padding: 9px 20px;
	border-radius: 42px;
	background: rgba(0, 0, 0, 0.1);
	color: rgba(0, 0, 0, 0.66);
`;

const StyledCodeLenguages = styled.div`
	margin-top: 2rem;
	margin-bottom: 3rem;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
`;

const StyledIcons = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	margin: 0.7rem 0;
`;

export {
	StyledPage,
	StyledTextContainer,
	StyledTitle,
	StyledText,
	StyledBackContainer,
	StyledCodeLenguage,
	StyledCodeLenguages,
	StyledIcons
};
