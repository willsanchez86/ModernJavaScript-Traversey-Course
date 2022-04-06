document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true)


    // Optional - Used for spinners/loaders
    // xhr.onprogress = function() {
    //     console.log('ReadyState', xhr.readyState);
    // }

    xhr.onload = function() {
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();

        //------readyState Values------//
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready






    //------HTTP STATUSES------//
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}