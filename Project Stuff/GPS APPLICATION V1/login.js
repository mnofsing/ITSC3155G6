 /*** creates session when user clicks login button
  * params null
  * returns void
  */

 function createSession(e) {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    console.log(userName,password);
    let detailCorrect = false;
    for (let [key, value] of Object.entries(data)) {
        if(userName === key && password === value){
            sessionStorage.setItem('loginTime', new Date().getTime());
            //set flag true to detect user entered id and password is correct
            detailCorrect = true;
            if(document.getElementById('option2').checked){
                window.location.href = 'managerPage.html';
            }
            else{
                window.location.href = 'driverPage.html';
            }
        } 
    }

    if(!detailCorrect) {
        document.getElementById('error').classList.remove('hide');
    }
}

function kill_session() {
    if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

    xmlhttp.open("GET","session_destroyer.php",false);
    xmlhttp.send();

    document.getElementById("id_of_a_hidden_div").innerHTML=xmlhttp.responseText; 
}

const data = {
    'jsmith' : 'pass',
    'pdickens' : 'pass'
}