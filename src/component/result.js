import { AnswerTypes, questions } from '../data/question';
import { describtion } from '../data/describtion';

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

const headerResult = (type) => {
    switch (type) {
        case AnswerTypes.A:
            return <img src={require('../image/บำเพ็ญ-text.PNG')} alt='HeaderResult' />
        case AnswerTypes.B:
            return <img src={require('../image/สอน-text.PNG')} alt='HeaderResult' />
        case AnswerTypes.C:
            return <img src={require('../image/สวัส-text.PNG')} alt='HeaderResult' />
        case AnswerTypes.D:
            return <img src={require('../image/เรียน-text.PNG')} alt='HeaderResult' />
        default:
            return <img src={require('../image/บำเพ็ญ-text.PNG')} alt='HeaderResult' />
    }
}

const imageMostAnswered = (type) => {
    switch (type) {
        case AnswerTypes.A:
            return <img src={require('../image/บำเพ็ญ.PNG')} alt='Result' />
        case AnswerTypes.B:
            return <img src={require('../image/สอน.PNG')} alt='Result' />
        case AnswerTypes.C:
            return <img src={require('../image/สวัส.PNG')} alt='Result' />
        case AnswerTypes.D:
            return <img src={require('../image/เรียน.PNG')} alt='Result' />
        default:
            return <img src={require('../image/บำเพ็ญ.PNG')} alt='Result' />
    }
}

const describeText = (type) => {
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

const resultComponent = (arr) => {
    const type = mostAnswered(arr)
    return (
        <div>
            <div className='result-content'>
                {headerResult(type)}
                {imageMostAnswered(type)}
            </div>
            <p>{describeText(type)}</p>
        </div>
    )
}
export default resultComponent