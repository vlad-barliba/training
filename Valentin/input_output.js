const questions = ['what is your name?', 'What is your current job?', 'What are your favourite hobbies?'];
let answers = [];

function ask(index) {
    process.stdout.write(`${questions[index]}`);
}

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    }
    else {
        console.log("Thank you for the answers!");
        process.exit();
    }

});

process.on('exit',()=>{
process.stdout.write(`Numele tau este ${answers[0]}, lucrezi ca si ${answers[1]} si ai hobbi: ${answers[2]}`);
});


ask(0);
