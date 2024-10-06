let dynamic = document.getElementsByClassName("dynamic")
let menu = document.getElementsByClassName("menuBtn")
let menuActions = [
  () => dashBoard(),
  () => game(),
  () => chat(),
  () => settings(),
  () => lougout()
];

let ldb = `
<div class="mainDiv" id="mainDiv">
<div class="mainSide">
    <div class="mainSideTop">
    <div class="png">
        <img class="pngImg pngleft" src="pngPlayer2.png" alt="">
    </div>
        <div class="middleMST">
            <h1>PLANET PONG</h1>
            <p id="parag">Welcome to Pong Arena, where the classic game comes to life!
    Get ready to dive into fast-paced, retro-style fun as you challenge
    friends or play solo. Whether you're here to relive memories 
    or discover a timeless favorite,
    you're in for an exciting ride. Let the games begin!</p>
            <button class="shadBtn" id="btnMST" onclick="game()">JOIN A GAME</button>
        </div>
    <div class="png">
        <img class="pngImg pngright" src="pngPlayer1.png" alt="">
    </div>
    </div>
    <div class="mainSideBottom">
        <div></div>
        <div></div>
    </div>
</div>
</div>
`;
let dashBoardHtm = `
<div class="mainDiv" id="mainDiv">
<div class="mainSide">
    <div class="mainSideTop">
    <div class="png">
    <img class="pngImg" src="pngPlayer2.png" alt="">
    </div>
        <div class="middleMST">
            <h1>PLANET PONG</h1>
            <p id="parag"></p>
            <button class="shadBtn" id="btnMST" onclick="game()">JOIN A GAME</button>
        </div>
    <div class="png">
        <img class="pngImg" src="pngPlayer1.png" alt="">
    </div>
    </div>
    <div class="mainSideBottom">
        <div></div>
        <div></div>
    </div>
</div>
</div>
`
let gameHtm = `<div class="fakeDiv"></div>`
let chatHtm = `<div class="fakeDiv1"></div>`
let settingsHtm = `<div class="fakeDiv2"></div>`
let logoutHtm = `<div class="fakeDiv3"></div>`



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

function showAndHide(nowContent,showOrHide)
{
  nowContent.style.marginTop = showOrHide ? '0%' : '120%';
  nowContent.style.opacity = showOrHide ? '1' : '0';
}

function replaceHtml(toReplace,by)
{
  toReplace.innerHTML = ''
  toReplace.innerHTML = by
}

function addSelection(idx)
{
  for( let i = 0; i < 5;i++ )
  {
    i === idx ? menu[i].classList.add("selected") : menu[i].classList.remove("selected")
    i === idx ? menu[i].removeEventListener("click", menuActions[i]) : menu[i].addEventListener("click", menuActions[i])
  }
}

function dashBoard(){
  let nowContent = dynamic[0].firstElementChild
  if (nowContent && nowContent.classList.contains("mainDiv"))
    return;
  if (nowContent)
    showAndHide(nowContent, 0)
  setTimeout(() => {
    replaceHtml(dynamic[0],ldb)
    let toShow = document.getElementsByClassName("mainDiv");
    setTimeout(function() {
      showAndHide(toShow[0],1)
      // setupDashboard()
      addSelection(0)
    }, 100);
  }, 100);
}

function helper(nowContent, classN, idx, comp)
{
  if (nowContent)
    showAndHide(nowContent, 0)
  setTimeout(() => {
    replaceHtml(dynamic[0], comp)
    let toShow = document.getElementsByClassName(classN);
    setTimeout(function() {
      addSelection(idx)
      showAndHide(toShow[0],1)
    }, 100);
  }, 100);
}

// Each function Will fetch it's part and delete the old one
// it can be either with fetching from another html
// Or just writing html directly as a string and inject it --- will need to inject the JS or the part TOO

function game() {
  let nowContent = dynamic[0].firstElementChild
  if (nowContent && nowContent.classList.contains("fakeDiv"))
    return;
  helper(nowContent, 'fakeDiv', 1, gameHtm)
}

function chat()
{
  let nowContent = dynamic[0].firstElementChild
  if (nowContent && nowContent.classList.contains("fakeDiv1"))
    return;
  helper(nowContent, 'fakeDiv1', 2, chatHtm)
}

function settings()
{
  let nowContent = dynamic[0].firstElementChild
  if (nowContent && nowContent.classList.contains("fakeDiv2"))
    return;
  helper(nowContent, 'fakeDiv2', 3, settingsHtm)
}

function lougout()
{
  let nowContent = dynamic[0].firstElementChild
  if (nowContent && nowContent.classList.contains("fakeDiv3"))
    return;
  helper(nowContent, 'fakeDiv3', 4, logoutHtm)
}

function clickSetter()
{
  menu[0].addEventListener("click",() => dashBoard())
  menu[1].addEventListener("click",() => game())
  menu[2].addEventListener("click",() => chat())
  menu[3].addEventListener("click",() => settings())
  menu[4].addEventListener("click",() => lougout())
}

window.onload = function() {
  replaceHtml(dynamic[0], dashBoardHtm)
  showAndHide(dynamic[0].firstElementChild, 1)
  setupDashboard()
  clickSetter()
  //here must give each part its event listener on click 
}