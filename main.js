function iLostTheGame(){
    document.getElementById("helloworld").innerText = "You lost the game";
}

//document.getElementById("lost").onclick = iLostTheGame;



function submit_text(){
    const inputElement = document.getElementById('input1');
    const text = inputElement.value;
    fetch('http://127.0.0.1:8000/submit_text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById("helloworld").innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.getElementById('lost').onclick = submit_text;

