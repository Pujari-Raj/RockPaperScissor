// 
const rpsgame = () => {

    // console.log('rpsgame function called!!!');
    // Gathering elements and scores
    let userScore = 0;
    let ComputerScore = 0;
    let moves = 0;
    let rockbtn = 'rock';
    let paperbtn = 'paper';
    let scissorbtn = 'scissors';
    let userresult = document.getElementById("result-user-stat");
    let compresult = document.getElementById("result-comp-stat");


    //playGame function
    const playGame = () => {
        //console.log('playGame function called');
        rockbtn = document.querySelector("#r img");
        paperbtn = document.querySelector("#p img");
        scissorbtn = document.querySelector("#s img");

        const playerOptions = [rockbtn, paperbtn, scissorbtn];
        const compOptions = ['rock', 'paper', 'scissors'];

        // function to start playing game(taking user & computer choice)
        playerOptions.forEach(option => {
           option.addEventListener('click', function() {
            
            //console.log(option);
            const movesleft = document.querySelector('.moves-left');
            moves++;
            movesleft.innerText = `Moves left -${5-moves}`;
            //console.log(moves);
          
            const choicenum = Math.floor(Math.random()*3);
            const compchoice = compOptions[choicenum];

            //console.log(playerOptions, compchoice);
            
            /* calling winner function and passing first parameter playeroption using
             getAttribute property and second parameter as computer-option 
            */
            winner(this.getAttribute('alt'), compchoice);

            // printing user & computer choice
            userresult.innerText = `User- ${option.getAttribute("alt")}`;
            compresult.innerText =  `Computer- ${compchoice}`
           
            //stopping the game after 5 moves
            if(moves == 5){
                gameOver(playerOptions, movesleft);
            }

           }) 
        })
    } // playGame ends here

    //function for different conditions
    const winner = (player, computer) => {

        //console.log('winner function called');

        // Gathering scores and result elements
        const result = document.getElementById('result-final-stat');
        const playerScoreboard = document.querySelector('#userScoreVal');
        const compScoreboard = document.querySelector('#compScoreVal');

        //console.log("player option- ",player+"Computer option- ",computer);

        // conditions
        // console.log(playerOptions, compOptions);
        if(player === computer){
            console.log("player option- ",player+"Computer option- ",computer);
            result.innerText = 'Tie';
        }

        else if(player == 'rock'){
            if(computer == 'paper' ){
                result.textContent = 'Computer Won';
                ComputerScore++;
                compScoreboard.textContent = ComputerScore;
            }
            else{
                result.textContent = 'Player Won';
                userScore++;
                playerScoreboard.textContent = userScore;
            }
            //console.log("player option- ",player+" Computer option- ",computer);
        }

        else if(player == 'scissors'){
            if(computer == 'rock' ){
                result.textContent = 'Computer Won';
                ComputerScore++;
                compScoreboard.textContent = ComputerScore;
            }
            else{
                result.textContent = 'Player Won';
                userScore++;
                playerScoreboard.textContent = userScore;
            }
            //console.log("player option- ",player+" Computer option- ",computer);

        }
        else if(player == 'paper'){
            if(computer == 'scissors' ){
                result.textContent = 'Computer Won';
                ComputerScore++;
                compScoreboard.textContent = ComputerScore;
            }
            else{
                result.textContent = 'Player Won';
                userScore++;
                playerScoreboard.textContent = userScore;
            }
            //console.log("player option- ",player+" Computer option- ",computer);
        }
    } //winner function ends here

    //function for final result
    const gameOver = (playerOptions, movesleft) => {

        //console.log('gameOver function called');

        // Gathering elements and reloadbtn
        const result = document.getElementById('result-final-stat');
        const movesremaining = document.querySelector('.moves-left');
        const reloadbtn = document.querySelector(".reload-btn");

        // hiding the options after 5 moves 
        playerOptions.forEach(option => {
			option.style.display = 'none';
		})

        movesremaining.innerText = 'Game Over!!';
        //console.log('movesleft-', movesremaining);
        movesremaining.style.display = 'none';

        if(userScore > ComputerScore){
            console.log("player won");
            result.innerText = 'You Won The Game';
        }
        else if(userScore < ComputerScore){
            console.log("comp won");
            result.innerText = 'You Lost The Game';
        }
        else{
            console.log(`match tie ${playerScore} ${compScore}`);
            result.innerText = 'Tie';
        }
        // displaying reloadbtn after the final result 
        reloadbtn.innerHTML = "Restart Game";
        reloadbtn.style.display = "flex";
        reloadbtn.addEventListener('click',() =>{
            window.location.reload();
        })

    } //gameOver function ends here
     
    // calling playGame function
    playGame();
}

//calling main function to start game
rpsgame();