import { useState } from 'react';
import {
	StyledHeader,
	StyledMenuIcon,
	StyledUl,
	StyledLi,
	StyledNav,
	StyledMenuIconContainer
} from './styles';

import { NavLink } from 'react-router-dom';

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledHeader>
			<StyledNav>
				<StyledMenuIconContainer>
					<StyledMenuIcon
						src={open ? '/images/close-icon.svg' : '/images/open-icon.svg'}
						alt='Menu Icon'
						rotate={open ? '45deg' : '0'}
						onClick={() => setOpen(!open)}
					/>
				</StyledMenuIconContainer>
				<StyledUl translate={open ? '0' : '100vw'}>
					<StyledLi>
						<NavLink to='/'>Home</NavLink>
					</StyledLi>
					<StyledLi>
						<NavLink to='/projects'>Proyectos</NavLink>
					</StyledLi>
					<StyledLi>
						<NavLink
							to='/about-me'
							//  onClick={() => setModal(true)}
						>
							Sobre mí
						</NavLink>
					</StyledLi>
				</StyledUl>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
