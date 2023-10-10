const baarForm = document.querySelector('#baarForm');
let baarInput = document.querySelector('#baarInput');

baarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        email: baarInput.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){ 
        console.log(xhr.responseText);
        
        if(xhr.responseText == 'success'){
            alert('Email sent');
            baarInput.value = '';
        } else{
            alert('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formData));
});