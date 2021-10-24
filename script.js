function handleError ( err ){
    console.log ( err );
}
    
async function fetchBook (){
    let bookFetch = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699").catch(handleError);
    if (bookFetch.ok) {
    let bookResponse = await bookFetch.json();

    console.log (`Title is ${bookResponse.items[0]["volumeInfo"]["title"]}`);
    console.log (`Description is ${bookResponse.items[0]["volumeInfo"]["description"]}`);

    }else{
        Promise.reject(bookFetch)
    }

}
fetchBook();




let timeOutText = document.getElementById("timeout_text");
let timer;
function testTimeOut(){
    timeOutText.innerText = "The time out has been started";
    timer = setTimeout(()=>{
        timeOutText.innerText = "Time out has been triggered";
        timeOutText.style = "color: green;";
    },3000)

}


function clearTimeOut(){
    clearTimeout (timer);
        timeOutText.innerText = "The time out has been cleared";
        timeOutText.style = "";
}