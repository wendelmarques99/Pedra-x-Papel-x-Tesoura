
let playgame = confirm("Shall we play rock, paper or scissors?");

if (playgame){

    let userchoice = prompt("Please enter rock, paper or scissors.");

    if (userchoice){

        let playerOne = userchoice.trim().toLowerCase();

        if (playerOne == "rock" || playerOne == "paper" || playerOne == "scissors"){
            let computerchoice = Math.floor(Math.random()*3+1);
            let computer = computerchoice === 1 ? "rock"
            : computerchoice === 2 ? "paper"
            : "scissors";

            let result = 
            computer == playerOne ? "Good game!"
            : playerOne == "rock" && computer == "paper"
            ? `Player : ${playerOne}\nComputer: ${computer}\n
            Computer wins!`
            : playerOne == "paper" && computer == "rock"
            ? `Player : ${playerOne}\nComputer: ${computer}\n
            Player wins!`
            : playerOne == "paper" && computer == "scissors"
            ? `Player : ${playerOne}\nComputer: ${computer}\n
            Computer wins!`
            // stop here. But you keep continue building other choices with the same logic.
            : "Tente novamente!";
            alert(result)
        }else{
            alert("You did not choice rock, paper, scissor");
        }
    } else{
        alert("I guess you chnged your mind. Maybe next time.");
    }

} else{

    alert("Ok. Maybe next time!");
}


