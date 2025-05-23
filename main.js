function iLostTheGame(){
    document.getElementById("helloworld").innerText = "You lost the game";
}

//document.getElementById("lost").onclick = iLostTheGame;



function submit_text(){
    const inputElement = document.getElementById('input1');
    const text = inputElement.value;
    let temp = '';
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
        temp = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
    document.getElementById("helloworld").innerText = temp;
}

document.getElementById('lost').onclick = submit_text;

function loadTableData(){
    fetch('http://127.0.0.1:8000/get_data')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("data-table-body");
            tableBody.innerHTML = ""; // clear existing rows
            data.forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${row.id}</td><td>${row.name}</td><td>${row.value}</td>`;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error("Failed to fetch data:", error);
        });
}
window.onload = loadTableData;
