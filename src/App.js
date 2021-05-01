import './index.css';

const App = () => {
	return (
		<Navbar>
			<NavItem icon='1'/>
			<NavItem icon='2'/>
			<NavItem icon='3'/>
		</Navbar>
	);
};

export default App;

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
	return (
		<li className='navItem'>
			<a href="#" className='icon-button'>
				{ props.icon }
			</a>
		</li>
	);
}
