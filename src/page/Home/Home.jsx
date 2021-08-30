// react
import { useState } from 'react';

// component
import Alert from './Alert/Alert';
import Header from '../../component/Header/Header';
import Main from '../../component/Main/Main';
import Footer from '../../component/Footer/Footer';

const Home = () => {

	const [ ActiveName, setActiveName ] = useState('home');

	return(
		<div className='home'>
			<Alert />
			<Header ActiveName={ActiveName} setActiveName={setActiveName} />
			<Main setActiveName={setActiveName} />
			<Footer />
		</div>
	)

}

export default Home;