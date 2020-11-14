import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa'

import logoUW from '../../assets/images/logo_uw.png'

import './styles.css';

function HomePage() {
	return (
		<div className='home-page'>
			<div className="header-section">
				<img alt="Logo UW" src={logoUW} className="bounce" />
				<p>Breath. Look inside. Look up.<br/><strong>What do you see?</strong></p>
			</div>
			<div className="buttons-section">
				<Link to="/questions" className="btn btn-big btn-play" >Olhar com mais calma</Link>
			</div>
			<footer>
				Feito com <FaRegHeart /> por Jeanne Lima
			</footer>
		</div>
	);
}

export default HomePage;