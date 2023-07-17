const randomJoke = () => {
    let firstWords = ['What', 'Why'];
    let secondParts = [' do you call a', ' did the', ' do'];
    let thirdParts = [' well-balanced horse? Stable.', ' pile of cats? A meow-ntain.',
    ' cows wear bells? Because their horns don’t work.', ' hummingbirds hum? Because they don’t know the words!', ' bicycle fall over? Because it was two tired.',
' cookie go to the hospital? Because he felt crumby.', ' triangle say to the circle? You’re pointless.',
' tomato say to the other tomato during a race? Ketchup.']
    const numberRandomizer = () => {
        return Math.floor(Math.random() * 2)
    }
    let randomNumber = numberRandomizer();
    let joke = [];
    let firstWord = firstWords[randomNumber];
    joke.push(firstWord);
    if (firstWord === 'What') {
        randomNumber = numberRandomizer();
        let secondPart = secondParts[randomNumber];
        joke.push(secondPart);
        if (secondPart === ' do you call a') {
            randomNumber = numberRandomizer();
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        } else if (secondPart === ' did the') {
            randomNumber = numberRandomizer() + 6;
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        }
    } else if (firstWord === 'Why') {
        randomNumber = numberRandomizer() + 1;
        let secondPart = secondParts[randomNumber];
        joke.push(secondPart);
        if (secondPart === ' did the') {
            randomNumber = numberRandomizer() + 4;
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        } else if (secondPart === ' do') {
            randomNumber = numberRandomizer() + 2;
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        }
    }
    return joke.join('');
}

console.log(randomJoke());