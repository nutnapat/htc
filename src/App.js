import React, { useState } from 'react';
import { questions } from './data/question';
import resultComponent from './component/result';
import contactComponent from './component/contact';
export default function App() {
	const [startPage, setStartPage] = useState(true);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

	const handleNextClick = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};

	const handleBackClick = () => {
		const prevQuestion = currentQuestion - 1;
		if (prevQuestion >= 0) {
			setCurrentQuestion(prevQuestion);
		}
	};

	const handleAnswerSelection = (answerIndex) => {
		const updatedSelectedAnswers = [...selectedAnswers];
		updatedSelectedAnswers[currentQuestion] = answerIndex;
		setSelectedAnswers(updatedSelectedAnswers);
	};

	const handleStart = () => {
		setStartPage(false);
	};

	const handleRestart = () => {
		setStartPage(true)
		setCurrentQuestion(0)
		setShowResult(false);
		setSelectedAnswers(Array(questions.length).fill(null))
	}

	return (
		<div>
			{startPage ?
				(
					<div className='welcome-page modal-result'>
						<img src={require('./image/โลโก้.PNG')} alt='Result' />
						<p>Hill Tribe Club ขอต้อนรับทุกคนมาทำความรู้จักโครงต่าง ๆ ในค่ายของชมรมเรา ผ่านบททดสอบ HTC Personality ที่บ่งบอกความเป็นตัวคุณ <br/>ถ้าอยากรู้ว่าคุณเหมาะกับโครงอะไร ไปเริ่มเล่นกันเลย !</p>
						<button onClick={() => handleStart()}>
							Start
						</button>
					</div>
				)
				: showResult ? (
					<div className='modal-result'>
						<div className='score-section'>
							{resultComponent(selectedAnswers)}
							<button
								onClick={() => {
									handleRestart();
								}}
							>
								Restart
							</button>
							<p>สามารถติดตามพวกเราได้ที่</p>
							{contactComponent()}
						</div>
					</div>
				) : (
					<div className='modal-question'>
						<div className='question-section'>
							<div className='question-count'>
								{/* <span>Question {currentQuestion + 1}</span>/{questions.length} */}
								<span>คำถาม</span>
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption, index) => (
								<button
									key={index}
									className={selectedAnswers[currentQuestion] === index ? 'selected' : ''}
									onClick={() => {
										handleAnswerSelection(index);
									}}
								>
									{answerOption.answerText}
								</button>
							))}
						</div>
						<div className='button-section'>
							{currentQuestion !== 0 && <button onClick={handleBackClick}>Back</button>}
							<button
								onClick={handleNextClick}
								disabled={selectedAnswers[currentQuestion] === null}
							>
								{currentQuestion === questions.length - 1 ? 'Done' : 'Next'}
							</button>
						</div>
					</div>
				)}
		</div>
	);
}