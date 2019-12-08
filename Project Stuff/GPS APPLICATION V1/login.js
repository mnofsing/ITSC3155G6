/*** creates session when user clicks login button
 * params null
 * returns void
 */
function createSession(e) {
    e.preventDefault();
    if (document.getElementById('option2').checked) {
        createManagerSession(e);
    }
    else {
        createDriverSession(e);
    }
}

function createDriverSession(e) {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    console.log(userName, password);
    let detailCorrect = false;
    for (let [key, value] of Object.entries(drivers)) {
        if (userName === key && password === value) {
            sessionStorage.setItem('loginTime', new Date().getTime());
            //set flag true to detect user entered id and password is correct
            detailCorrect = true;
            window.location.href = 'driverPage.html';
        }
    }

    if (!detailCorrect) {
        document.getElementById('error').classList.remove('hide');
    }
}

function createManagerSession(e) {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    console.log(userName, password);
    let detailCorrect = false;
    for (let [key, value] of Object.entries(managers)) {
        if (userName === key && password === value) {
            sessionStorage.setItem('loginTime', new Date().getTime());
            //set flag true to detect user entered id and password is correct
            detailCorrect = true;
            window.location.href = 'managerPage.html';
        }
    }

    if (!detailCorrect) {
        document.getElementById('error').classList.remove('hide');
    }
}

const drivers = {
    'jsmith': 'pass',
    'rsanchez': 'pass',
    'hdriveman': 'pass',
}

const managers = {
    'kjordan': 'pass',
    'rmathews': 'pass'
}