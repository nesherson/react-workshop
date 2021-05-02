import './index.css';
import { useState } from 'react'; 

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

const App = () => {

	

	return (
		<Navbar>
			<NavItem icon={<PlusIcon />}/>
			<NavItem icon={<BellIcon />}/>
			<NavItem icon={<MessengerIcon />}/>

			<NavItem icon={<CaretIcon/>}>
				<DropdownMenu />
			</NavItem>
				
		</Navbar>
	);
};

export default App;

const DropdownMenu = () => {
	const DropdownItem = (props) => {
		return (
			<a href="#" className='menu-item'>
				<span className='icon-button'>{props.leftIcon}</span>
				{ props.children }
				{ props.rightIcon && <span className='icon-button icon-right'>{props.rightIcon}</span>}
			</a>
		);
	}
	return (
		<div className='dropdown'>
			<DropdownItem>My Profile</DropdownItem>
			<DropdownItem
				leftIcon={<CogIcon/>}
				rightIcon={<ChevronIcon/>}>
					Settings
			</DropdownItem>	
		</div>
	);
}

const Navbar = (props) => {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>
				{ props.children }
			</ul>
		</nav>
	);
}

const NavItem = (props) => {
	const [open, setOpen] = useState();

	return (
		<li className='navItem'>
			<a href="#" className='icon-button' onClick={() => setOpen(!open)}>
				{ props.icon }
			</a>
			{ open && props.children}
		</li>
	);
}
