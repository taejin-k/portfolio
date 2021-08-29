// react
import { useState } from 'react';

// css
import './Header.css';

const Header = ({ ActiveName, setActiveName }) => {

	const [ MenuOpen, setMenuOpen ] = useState(false);
	const menuLists = [
		{id: 1, name: 'home', title: 'HOME'},
		{id: 2, name: 'about', title: 'ABOUT'},
		{id: 3, name: 'project', title: 'PROJECT'},
		{id: 4, name: 'end', title: 'END'},
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

			<nav id='gnb' className='nav'>
				<ul>
					{
						menuLists.map((menuList, index) => {
							return(
								<li key={index} className={ActiveName === menuList.name ? 'on' : ''}>
									<span data-menuanchor={`${menuList.name}_page`} onClick={() => menuClose(menuList.name)}>{menuList.title}</span>
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