import React, { useState } from 'react';
import { AnswerTypes, questions } from './data/question';
import { describtion } from './data/describtion';
export default function App() {
	const [userName, setUserName] = useState('');
	const [startPage, setStartPage] = useState(true);
	const [receiveName, setReceiveName] = useState(false);
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

	const handleStart = (name) => {
		setUserName(name);
		setStartPage(false);
	};

	const mostAnswered = (arr) => {
		const frequencyMap = {};
		for (let i = 0; i < arr.length; i++) {
			const type = questions[i].answerOptions[arr[i]].type
			if (frequencyMap[type]) {
				frequencyMap[type]++;
			} else {
				frequencyMap[type] = 1;
			}
		}

		let mostDuplicatedValue = null;
		let highestFrequency = 0;

		for (const value in frequencyMap) {
			if (frequencyMap[value] > highestFrequency) {
				highestFrequency = frequencyMap[value];
				mostDuplicatedValue = value;
			}
		}

		return mostDuplicatedValue;
	}

	const imageMostAnswered = (arr) => {
		const type = mostAnswered(arr)
		switch (type) {
			case AnswerTypes.A:
				return <img src={require('./image/typeA.jpeg')} alt='Result' />
			case AnswerTypes.B:
				return <img src={require('./image/typeB.png')} alt='Result' />
			case AnswerTypes.C:
				return <img src={require('./image/typeC.jpeg')} alt='Result' />
			case AnswerTypes.D:
				return <img src={require('./image/typeD.jpeg')} alt='Result' />
			default:
				return <img src={require('./image/typeA.jpeg')} alt='Result' />
		}
	}

	const describeText = (arr) => {
		const type = mostAnswered(arr)
		switch (type) {
			case AnswerTypes.A:
				return describtion[AnswerTypes.A]
			case AnswerTypes.B:
				return describtion[AnswerTypes.B]
			case AnswerTypes.C:
				return describtion[AnswerTypes.C]
			case AnswerTypes.D:
				return describtion[AnswerTypes.D]
			default:
				return describtion[AnswerTypes.A]
		}
	}

	const handleRestart = () => {
		setUserName('')
		setStartPage(true)
		setCurrentQuestion(0)
		setShowResult(false);
		setSelectedAnswers(Array(questions.length).fill(null))
	}

	return (
		<div className='app'>
			{startPage ?
				receiveName ? (
					<div className='start-page'>
						<h2>Let's start</h2>
						<p>Please enter your name to begin:</p>
						<input
							type='text'
							placeholder='Your Name'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<button onClick={() => handleStart(userName)} disabled={!userName}>
							Start Quiz
						</button>
					</div>
				) : (
					<div className='welcome-page'>
						<h2>Welcome to HTC Quiz App!</h2>
						<button onClick={() => setReceiveName(true)}>
							Start
						</button>
					</div>
				)
				: showResult ? (
					<div className='score-section'>
						<h2>Hi {userName}!</h2>
						<div className='result-content'>
							{imageMostAnswered(selectedAnswers)}
						</div>
						<p>{describeText(selectedAnswers)}</p>
						<button
							onClick={() => {
								handleRestart();
							}}
						>
							Restart
						</button>
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
								{currentQuestion === questions.length - 1 ? 'Show Result' : 'Next'}
							</button>
						</div>
					</>
				)}
		</div>
	);
}