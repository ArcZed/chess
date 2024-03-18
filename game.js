document.addEventListener('DOMContentLoaded', () => {
const chessboard = document.querySelector('.chessboard');
createChessboard();
function createChessboard () {
    console.log('running ')
    for (let i = 1; i <= 8; i++) {
        for (let u = 1; u <=8; u++){
            const square = document.createElement('div');
            if (i % 2 == 1){
                if (u % 2 === 0){
                    square.classList.add('square', 'even');
                    chessboard.appendChild(square);
                    console.log(`create square #${u} row ${i}`)
                }
                else{
                    square.classList.add('square', 'odd');
                    chessboard.appendChild(square);
                    console.log(`create square #${u} row ${i}]`)
                }
            }
            else{
                if (u % 2 === 0){
                    square.classList.add('square', 'odd');
                    chessboard.appendChild(square);
                    console.log(`create square #${u} row ${i}`)
                }
                else{
                    square.classList.add('square', 'even');
                    chessboard.appendChild(square);
                    console.log(`create square #${u} row ${i}]`)
                }
            }
        }   
    }
}
})
