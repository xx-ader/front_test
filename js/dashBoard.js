function func(string, title) {
    for (let i = 0; i < string.length; i++) {
        const span = document.createElement('span'); // Create span for each letter
        span.textContent = string[i];
        span.style.display = 'inline-block'; // Inline-block to allow transformation
        span.classList.add('bounce'); // Add animation class
        title[0].appendChild(span);
    }
}

function showTextLetterByLetter(sideBar,btnMST,element, text, speed) {
    let i = 0;
    element.innerHTML = ''; // Clear any existing content

    function typeLetter() {
    if (i+1 === text.length)
    {
        btnMST.classList.toggle("shadBtn")
        sideBar.classList.add("sideBar")
    }
      if (i < text.length) {
        element.innerHTML += text.charAt(i); // Add one character at a time
        i++;
        setTimeout(typeLetter, speed); // Call the function again after a delay
      }
    }

    typeLetter(); // Start the typing effect
  }


function setupDashboard()
{
  // if (title[0] || title[0] != undefined)
  //   return
  // animation
  let string = "Reda !";
  let title = document.getElementsByClassName("spanHolder");
    let pic = document.getElementsByClassName("pngImg")
    console.log(pic)
    let paragraph = document.getElementById("parag")
    let btnMST = document.getElementById("btnMST")
    let sideBar = document.getElementById("sideBar")
    pic[0].classList.add('pngleft','bounce')
    pic[1].classList.add('pngright','bounce')
    func(string, title);
    let para = `Welcome to Pong Arena, where the classic game comes to life!
    Get ready to dive into fast-paced, retro-style fun as you challenge
    friends or play solo. Whether you're here to relive memories 
    or discover a timeless favorite,
    you're in for an exciting ride. Let the games begin!`
    showTextLetterByLetter(sideBar,btnMST,paragraph, para, 1)
}



    replaceHtml(dynamic[0], dashBoardHtm)
    nowContent = dynamic[0].firstElementChild
    showAndHide(nowContent,1)
    setupDashboard()
    //here must give each part its event listener on click 
