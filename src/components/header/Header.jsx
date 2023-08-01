import {
	StyledHeader,
	StyledMenuIcon,
	StyledUl,
	StyledLi,
	StyledA,
	StyledNav,
	StyledMenuIconContainer
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledNav>
				<StyledMenuIconContainer>
					<StyledMenuIcon src='/images/open-icon.svg' alt='' />
				</StyledMenuIconContainer>
				<StyledUl>
					<StyledLi>
						<StyledA href=''>Home</StyledA>
					</StyledLi>
					<StyledLi>
						<StyledA href=''>Proyectos</StyledA>
					</StyledLi>
					<StyledLi>
						<StyledA href=''>Sobre mí</StyledA>
					</StyledLi>
				</StyledUl>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
