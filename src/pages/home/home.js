import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa'

import logoUW from '../../assets/images/logo_uw.png'

import './styles.css';

const handleLoading = (e) => {
	const loading = document.getElementById('loading-page');
	const bgLoading = document.getElementById('modal-backdrop');

	loading.classList.add('show');
	bgLoading.classList.add('show');

	setTimeout(function(){
		loading.classList.remove('show');
		bgLoading.classList.remove('show');
	}, 800);
}

function HomePage() {
	return (
		<div className='home-page'>
			<div className="header-section">
				<img alt="Logo UW" src={logoUW} className="bounce" />
				<p>Breath. Look inside. Look up.<br/><strong>What do you see?</strong></p>
			</div>
			<div className="buttons-section">
				<Link to="/perguntas" onClick={(e) => handleLoading(e)}onClick={(e) => handleLoading(e)} className="btn btn-big btn-play" >Olhar com mais calma</Link>
			</div>
			<footer>
				<span>Feito com <FaRegHeart /> por Jeanne Lima</span>
			</footer>
		</div>
	);
}

export default HomePage;