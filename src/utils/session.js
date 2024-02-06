function setSession () {
  const sessionCode1 = getSession();
    if(sessionCode1.available){
        return sessionCode1.code;
    } else {

        var expiration_date = new Date();
        var cookie_string = '';
        var sessionCode = generateSession();
        expiration_date.setTime(expiration_date.getTime() + (60 * 1000));
        // Build the set-cookie string:
        cookie_string = "test_cookies=" + sessionCode + "; path=/; expires=" + expiration_date.toUTCString();
        // Create or update the cookie:
        document.cookie = cookie_string;
        return sessionCode;
    }
  }

function getSession () {
    var cookie_string = document.cookie;
    const regexpFoxQuality = /test_cookies=*\w+/;
    // const regexpFoxQuality = /test_cookies=*\w+(?=;)/;

    if (cookie_string.match(regexpFoxQuality)) {
      console.log(cookie_string.match(regexpFoxQuality)[0].split('=')[1]);
      return ({available: true ,code: cookie_string.match(regexpFoxQuality)[0].split('=')[1]});
    } else {
      return ({available: false ,code: null});
    }
  }

export { setSession }


function generateSession() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
  
    let randomString = '';
  
    for (let i = 0; i < 3; i++) {
      // Add a random letter
      randomString += letters[Math.floor(Math.random() * letters.length)];
      // Add a random number
      randomString += numbers[Math.floor(Math.random() * numbers.length)];
    }
  
    // Shuffle the characters in the string
    randomString = randomString.split('').sort(() => Math.random() - 0.5).join('');
  
    return randomString;
  }
  

  