const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const answer = [];
function Gen_Answer() {
    
    for (let index = 0; index < 4 ; index++) {
        console.log( alphabet[Math.floor(Math.random() * alphabet.length)]);
        var alphabet_index = alphabet[Math.floor(Math.random() * alphabet.length)]
        answer.push(alphabet_index)
    }
    
}

var count_guess=0
function checkGuess(answer_1,userguess) {
    console.log(answer_1)
    var Position_and_word = 0;
    var Word_correct = 0
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    count_guess += 1
    for (let i = 0; i < 4; i++) {
            // if letter index and right guess index are the same
            // letter is in the right position 
            // If the letter is in the word, check if it's in the right position
            // If the letter is in the right position, shades green
        if (answer_1[i] === userguess[i]) {
            Position_and_word += 1
            console.log("position and word correct",Position_and_word)
        }

        else if (answer_1.includes(userguess[i]) != 0) {
            console.log(answer.includes(userguess[i]))
            Word_correct += answer.includes(userguess[i])
            console.log("Only word correct",Word_correct)
        }
    }
    console.log("ถูกทั้งหมด"+ Word_correct + "ถูกตำแหน่ง" + Position_and_word +"จำนวนครั้ง",count_guess )
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = answer; // คำตอบ
    cell2.innerHTML = userguess; // สุ่ม
    cell3.innerHTML = Word_correct; // ถูก/ทั้งหมด
    cell4.innerHTML = Position_and_word; // ถูก/ตำแหน่ง
    cell5.innerHTML = count_guess; // ครั้งที่ 
    
}

console.log(answer)
document.getElementById('word').innerHTML = answer

$(document).ready(function(){
    Gen_Answer()
    $("#check_answer").click(function(){
      console.log($("#input_text").val());
      var useranswer = $("#input_text").val()
      checkGuess(answer,useranswer)
      /// check user answer and random question

    });
  });