// react
import { useState } from 'react';
import { Link } from 'react-router-dom';

// css
import './Header.css';

const Header = () => {

	const [ MenuOpen, setMenuOpen ] = useState(false);
	const [ ActiveName, setActiveName ] = useState('home');
	const menuLists = [
		{id: 1, name: 'home', title: 'HOME'},
		{id: 2, name: 'about', title: 'ABOUT'},
		{id: 3, name: 'second', title: 'SECOND'},
		{id: 4, name: 'third', title: 'THIRD'},
		{id: 5, name: 'fourth', title: 'FOURTH'}
	]

	const menuOpenClose = () => {
		setMenuOpen(!MenuOpen);
	}
	const menuClose = (name) => {
		setActiveName(name);
		setMenuOpen(false);
	}

	return(
		<header>

			<h1 className='name'><em>KIM</em>TAEJIN</h1>

			<div className={MenuOpen ? 'menu open' : 'menu'} onClick={menuOpenClose}>
				<button type='button'>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			<nav className='nav'>
				<ul>
					{
						menuLists.map((menuList, index) => {
							return(
								<li key={index} className={ActiveName === menuList.name ? 'on' : ''}>
									<Link to={`#${menuList.name}`} data-menuanchor={`${menuList.name}_page`} onClick={() => menuClose(menuList.name)}>{menuList.title}</Link>
								</li>
							)
						})
					}
				</ul>
			</nav>

		</header>
	)
}

export default Header;