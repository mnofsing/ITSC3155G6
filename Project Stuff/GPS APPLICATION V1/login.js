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
           window.location.href = 'MainPage.html';
        } 
    }

    if(!detailCorrect) {
        document.getElementById('error').classList.remove('hide');
    }
}

const data = {
    'a1' : 'a1',
    'b1' : 'b1'
}