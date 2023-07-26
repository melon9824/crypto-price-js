const toggleBtn = document.getElementById('toggle-btn');
const navList = document.getElementById('nav-list');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
})


// toggle icon change
let changeIcon = function(icon) {
    icon.classList.toggle('fa-times');
}


// crypto price
const bitcoin = document.getElementById('bitcoin');
const dogecoin = document.getElementById('dogecoin');
const ethereum = document.getElementById('ethereum');

let settings = {
    'async': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd',
    'method': 'GET',
    'headers': {}
}

$.ajax(settings).done(function(response) {
    // console.log(response);
    bitcoin.innerHTML = response.bitcoin.usd;
    dogecoin.innerHTML = response.dogecoin.usd;
    ethereum.innerHTML = response.ethereum.usd;
})