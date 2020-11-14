import React, { useState } from 'react';
// import './styles.css';

function QuestionsPage() {
	const questions = [
		{
			questionText: 'Pergunta 1?',
			answerOptions: [
				{ answerText: 'Teste 1', isCorrect: true },
				{ answerText: 'Teste 2', isCorrect: false },
				{ answerText: 'Teste 3', isCorrect: false },
			],
		},
		{
			questionText: 'Pergunta 2?',
			answerOptions: [
				{ answerText: 'Teste 1', isCorrect: true },
				{ answerText: 'Teste 2', isCorrect: false },
				{ answerText: 'Teste 3', isCorrect: false },
			],
		},
		{
			questionText: 'Pergunta 3?',
			answerOptions: [
				{ answerText: 'Teste 1', isCorrect: true },
				{ answerText: 'Teste 2', isCorrect: false },
				{ answerText: 'Teste 3', isCorrect: false },
			],
		},
		{
			questionText: 'Pergunta 4?',
			answerOptions: [
				{ answerText: 'Teste 1', isCorrect: true },
				{ answerText: 'Teste 2', isCorrect: false },
				{ answerText: 'Teste 3', isCorrect: false },
			],
		},
// {
		// 	questionText: 'Qual dos pratos abaixo ainda não cozinhamos para comermos juntas?',
		// 	answerOptions: [
		// 		{ answerText: 'Strogonoff tradicional', isCorrect: true },
		// 		{ answerText: 'Ovo', isCorrect: false },
		// 		{ answerText: 'Camarão com macarrão ao molho branco', isCorrect: false },
		// 		{ answerText: 'Risoto', isCorrect: false },
		// 		{ answerText: 'Frango grelhado', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'Dentre as opções, qual pasta do Pinterest eu não criei para nós?',
		// 	answerOptions: [
		// 		{ answerText: 'Amor', isCorrect: false },
		// 		{ answerText: 'Girafas', isCorrect: false },
		// 		{ answerText: 'Adoralina *-*', isCorrect: true },
		// 		{ answerText: 'D', isCorrect: false },
		// 		{ answerText: 'Stars, Galaxies & Love', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'Qual estampa de roupa do mesmo estilo já usamos juntas?',
		// 	answerOptions: [
		// 		{ answerText: 'Florida', isCorrect: true },
		// 		{ answerText: 'Xadrez', isCorrect: false },
		// 		{ answerText: 'Degradê', isCorrect: false },
		// 		{ answerText: 'Bolinhas', isCorrect: false },
		// 		{ answerText: 'Cor sólida', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'Qual dos nomes abaixo você nunca teve no meu celular?',
		// 	answerOptions: [
		// 		{ answerText: 'Deborah Cardoso', isCorrect: false },
		// 		{ answerText: 'Adora', isCorrect: false },
		// 		{ answerText: 'Mon Lapin', isCorrect: false },
		// 		{ answerText: 'Deba', isCorrect: true },
		// 		{ answerText: 'Amora', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'Em que ano começamos a nos falar?',
		// 	answerOptions: [
		// 		{ answerText: '2018', isCorrect: false },
		// 		{ answerText: '2015', isCorrect: false },
		// 		{ answerText: '2016', isCorrect: true },
		// 		{ answerText: '2019', isCorrect: false },
		// 		{ answerText: '2017', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'De onde eu nunca comprei presente para você?',
		// 	answerOptions: [
		// 		{ answerText: 'Mercado Livre', isCorrect: false },
		// 		{ answerText: 'Livraria Família Cristã', isCorrect: true },
		// 		{ answerText: 'Foom', isCorrect: false },
		// 		{ answerText: 'Amazon', isCorrect: false },
		// 		{ answerText: 'Livraria da travessa', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'Qual das frases do Antoine de Saint-Exupéry (autor do Pequeno Príncipe) eu já escrevi num papelzinho e te dei?',
		// 	answerOptions: [
		// 		{ answerText: 'Tu te tornas eternamente responsável por aquilo que cativas.', isCorrect: false },
		// 		{ answerText: 'Amar não é olhar um para o outro, é olhar juntos na mesma direção.', isCorrect: false },
		// 		{ answerText: 'Só se vê bem com o coração, o essencial é invisível aos olhos.', isCorrect: false },
		// 		{ answerText: 'O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem.', isCorrect: false },
		// 		{ answerText: 'Se alguém ama uma flor da qual só existe um exemplar em milhões e milhões de estrelas, isso basta para que seja feliz quando a contempla. Ele pensa: minha flor está lá, em algum lugar.', isCorrect: true },
		// 	],
		// },
		// {
		// 	questionText: 'Em que mês eu me apaixonei por você?',
		// 	answerOptions: [
		// 		{ answerText: 'Dezembro', isCorrect: false },
		// 		{ answerText: 'Fevereiro', isCorrect: false },
		// 		{ answerText: 'Março', isCorrect: true },
		// 		{ answerText: 'Abril', isCorrect: false },
		// 		{ answerText: 'Agosto', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'Qual das informações abaixo nunca esteve no nome das playlist que fiz para você?',
		// 	answerOptions: [
		// 		{ answerText: '16', isCorrect: false },
		// 		{ answerText: 'Amor', isCorrect: true },
		// 		{ answerText: 'Achegar', isCorrect: false },
		// 		{ answerText: 'Poesia', isCorrect: false },
		// 		{ answerText: 'Exclamação', isCorrect: false },
		// 	],
		// },
		// {
		// 	questionText: 'Como é a minha frase marcante para você?',
		// 	answerOptions: [
		// 		{ answerText: 'Para. Pensa. Respira. Fala.', isCorrect: false },
		// 		{ answerText: 'Calma. Respira. Fala.', isCorrect: false },
		// 		{ answerText: 'Para. Respira. Pensa. Fala.', isCorrect: true },
		// 		{ answerText: 'Respira. Para. Pensa. Fala.', isCorrect: false },
		// 		{ answerText: 'Calma. Respira. Pensa. Fala.', isCorrect: false },
		// 	],
		// },
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className='questions-page'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default QuestionsPage;