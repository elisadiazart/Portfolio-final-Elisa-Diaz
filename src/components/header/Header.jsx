import { useState } from 'react';
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
	const [open, setOpen] = useState(false);
	return (
		<StyledHeader>
			<StyledNav>
				<StyledMenuIconContainer onClick={() => setOpen(!open)}>
					<StyledMenuIcon
						src={open ? '/images/close-icon.svg' : '/images/open-icon.svg'}
						alt=''
						rotate={open ? '45deg' : '0'}
					/>
				</StyledMenuIconContainer>
				<StyledUl translate={open ? '0' : '100vw'}>
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
