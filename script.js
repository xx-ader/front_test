let dynamic = document.getElementsByClassName("dynamic")

let dashBoardHtm = `
<div class="mainDiv" id="mainDiv">
    <div class="topSide">
        <h1 class="helloTitle">Hello
            <div class="spanHolder"></div>
        </h1>
        <div class="profIcones">
            <i class="bi bi-star"></i>
            <i class="bi bi-bell"><sup class="note">1</sup></i>
            <i class="bi bi-bar-chart"></i>
        </div>
        <div class="profilePic"></div>
    </div>
<div class="mainSide">
    <div class="mainSideTop">
        <img class="png" src="pngPlayer2.png" alt="">
        <div class="middleMST">
            <h1>PLANET PONG</h1>
            <p id="parag"></p>
            <button class="shadBtn" id="btnMST">JOIN A GAME</button>
        </div>
        <img class="png" src="pngPlayer1.png" alt="">
    </div>
    <div class="mainSideBottom">
        <div></div>
        <div></div>
    </div>
</div>
</div>
`
let gameHtm = `<div class="fakeDiv"></div>`
let chatHtm = ``
let settingsHtm = ``
let logoutHtm = ``



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
  

    let string = "Reda !";
    let title = document.getElementsByClassName("spanHolder");
    let pic = document.getElementsByClassName("png")
    let paragraph = document.getElementById("parag")
    let btnMST = document.getElementById("btnMST")
    let sideBar = document.getElementById("sideBar")
    
    // this next var is going to be dynamic to inject in .dynamic div 
    // and the js part to gonna be injected
    // let nowContent = document.getElementById("mainDiv")


    // nowContent.style.marginBottom = '0%'
    pic[0].classList.add('pngleft','bounce')
    pic[1].classList.add('pngright','bounce')
    func(string, title);
    let para = `Welcome to Pong Arena, where the classic game comes to life!
    Get ready to dive into fast-paced, retro-style fun as you challenge
    friends or play solo. Whether you're here to relive memories 
    or discover a timeless favorite,
    you're in for an exciting ride. Let the games begin!`
    showTextLetterByLetter(sideBar,btnMST,paragraph, para, 10)
}

function dashBoard(){
  if (dynamic[0].firstElementChild 
  && dynamic[0].firstElementChild.classList.contains("mainDiv")) {
    return;
  }
  if (dynamic[0].firstElementChild)
  {
    let gg = document.getElementsByClassName("dynamic");
  let gg1 = gg[0].firstElementChild
  // console.log(gg1)
  gg1.style.marginTop = '120%'
  gg1.style.opacity = '0'
}
  // dashBoardHtm.style.marginTop = '120%';
  setTimeout(() => {
    // dynamic[0].innerHTML = ''; // Clear content after 1 second
    // dynamic[0].innerHTML = dashBoardHtm
    dynamic[0].innerHTML = '';
    dynamic[0].innerHTML = dashBoardHtm
    let tt = document.getElementsByClassName("mainDiv");
    setTimeout(function() {
      tt[0].style.marginTop = '0%';
      tt[0].style.opacity = '1';
      setupDashboard()
      // Code to execute after 1 second
    }, 200);
  }, 200);
}

function game() {
  // console.log(nowContent)
  if (dynamic[0].firstElementChild
  && dynamic[0].firstElementChild.classList.contains("fakeDiv")) {
    return;
  }
  // let gg = document.getElementsByClassName("dynamic");
  // dynamic[0].firstElementChild.classList.charAt(0).style.marginTop = '120%';
  let gg = document.getElementsByClassName("dynamic");
  let gg1 = gg[0].firstElementChild
  // console.log(gg1)
  gg1.style.marginTop = '120%'
  gg1.style.opacity = '0'
  setTimeout(() => {
    dynamic[0].innerHTML = ''; // Clear content after 1 second
    dynamic[0].innerHTML = gameHtm; // Add new content
    let tt = document.getElementsByClassName("fakeDiv");
    setTimeout(function() {
      tt[0].style.marginTop = '0%';
      tt[0].style.opacity = '1';
      // Code to execute after 1 second
    }, 200);
  }, 200);
}

function clickSetter(array)
{
  array[0].addEventListener("click",() => dashBoard())
  array[1].addEventListener("click",() => game())
  array[2].addEventListener("click",() => chat())
  array[3].addEventListener("click",() => settings())
}

window.onload = function() {
    let menu = document.getElementsByClassName("menuBtn")
    clickSetter(menu)


    


    //here must give each part its event listener on click 
}