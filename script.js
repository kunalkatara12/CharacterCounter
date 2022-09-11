const txtArea=document.querySelector('.textArea')
const count=document.querySelector('.count');
function countLetters() {
    const txtLen=txtArea.value.length;
    count.innerText=`${txtLen}`;
}