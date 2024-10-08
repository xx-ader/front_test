let dynamic = document.getElementsByClassName("dynamic")
let nowContent = dynamic[0].firstElementChild
let menu = document.getElementsByClassName("menuBtn")


// menu[0].addEventListener("click",dashBoard)
// menu[1].addEventListener("click",game)
// menu[2].addEventListener("click",chat)
// menu[3].addEventListener("click",settings)
// menu[4].addEventListener("click",lougout)

let ldb = `
<div class="mainDiv" id="mainDiv">
<div class="mainSide">
    <div class="mainSideTop">
    <div class="png">
        <img class="pngImg pngleft" src="assets/pngPlayer2.png" alt="">
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
        <img class="pngImg pngright" src="assets/pngPlayer1.png" alt="">
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
    <img class="pngImg" src="assets/pngPlayer2.png" alt="">
    </div>
        <div class="middleMST">
            <h1>PLANET PONG</h1>
            <p id="parag"></p>
            <button class="shadBtn" id="btnMST" onclick="game()">JOIN A GAME</button>
        </div>
    <div class="png">
        <img class="pngImg" src="assets/pngPlayer1.png" alt="">
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