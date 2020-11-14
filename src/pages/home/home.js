import React from 'react';
import { Link } from 'react-router-dom';

import logoUW from '../../assets/images/logo_uw.png'

import './styles.css';

function HomePage() {
	return (
		<div className='home-page'>
			<div className="header-section">
				<img alt="Logo UW" src={logoUW} />
			</div>
			<div className="buttons-section">
				<Link to="/questions">Olhar com mais calma</Link>
			</div>
		</div>
	);
}

export default HomePage;