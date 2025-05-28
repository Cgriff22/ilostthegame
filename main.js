function authFetch(url, options = {}) {
  const token = localStorage.getItem("access_token");
  options.headers = {
    ...options.headers,
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  };
  return fetch(url, options);
}



function iLostTheGame(){
    authFetch('http://127.0.0.1:8000/protected_route')
    .then(res => res.json())
    .then(data => console.log(data));

        

    document.getElementById("helloworld").innerText = "You lost the game";
}

document.getElementById("lost").onclick = iLostTheGame;


function submit_text(){
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password')
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    fetch('http://127.0.0.1:8000/submit_text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        //temp = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}

document.getElementById('enter').onclick = submit_text;

function sign_in(){
    const usernameInput = document.getElementById('signInUsername');
    const passwordInput = document.getElementById('signInPassword')
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    fetch('http://127.0.0.1:8000/sign_in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password})
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("access_token", data.access_token);
        console.log('Success:', data);
        //temp = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
document.getElementById('signInEnter').onclick = sign_in;  

function logout(){
    localStorage.removeItem("access_token");   
}
document.getElementById('logout').onclick = logout;

function loadTableData(){
    fetch('http://127.0.0.1:8000/get_data')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("data-table-body");
            tableBody.innerHTML = ""; // clear existing rows
            data.forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${row.id}</td><td>${row.username}</td><td>${row.value}</td>`;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error("Failed to fetch data:", error);
        });
}
window.onload = loadTableData;


