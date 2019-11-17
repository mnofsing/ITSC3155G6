 /*** creates session when user clicks login button
  * params null
  * returns void
  */

 function createSession(e) {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    console.log(userName,password);
    for (let [key, value] of Object.entries(data)) {
        if(userName === key && password === value){
            sessionStorage.setItem('loginTime', new Date().getTime());
            console.log(window.location.hostname,window.location.pathname);
            const pathname = window.location.pathname;
           window.location.href = 'MainPage.html';
        } else {
            document.getElementById('error').classList.remove('hide');
        }
    }
}

const data = {
    'a1' : 'a1',
    'b1' : 'b1'
}