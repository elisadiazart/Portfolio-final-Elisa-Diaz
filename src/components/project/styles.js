import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledA = styled.a`
	color: ${COLORS.white};
	text-transform: uppercase;
	font-family: Inter;
	font-size: 0.85rem;
	font-weight: 500;
	text-decoration: underline;
`;

const StyledLinks = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1.7rem 0;
`;

const StyledImage = styled.img`
	width: 100%;
	outline: 1px solid white;
`;

const StyledCodeTag = styled.div`
	display: inline-block;
	text-align: center;
	font-family: Inter;
	font-size: 14px;
	font-style: italic;
	font-weight: 700;
	text-transform: uppercase;
	padding: 9px 22px;
	border-radius: 42px;
	background-color: rgba(255, 255, 255, 0.14);
	color: rgba(255, 255, 255, 0.66);
`;

const StyledCodeTags = styled.div`
	margin-top: 2rem;
	margin-bottom: 3rem;
	display: flex;
	flex-wrap: wrap;
	gap: 12px 8px;
`;

const StyledTitle = styled.h3`
	color: ${COLORS.limaGreen};
	font-family: 'EB Garamond';
	font-size: 24px;
	font-style: italic;
	font-weight: 500;
	text-transform: uppercase;
	margin-bottom: 0.7rem;
`;

const StyledText = styled.p`
	color: #fff;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-transform: uppercase;
`;

const StyledProject = styled.div`
	padding-bottom: 3rem;
	padding-top: 5rem;
`;

export {
	StyledA,
	StyledLinks,
	StyledImage,
	StyledCodeTag,
	StyledCodeTags,
	StyledTitle,
	StyledText,
	StyledProject
};
