var gift = document.getElementsByClassName('gift')[0];
var giftText = document.getElementsByClassName('gift-text')[0];
var giftTop = document.getElementsByClassName('gift-top')[0];
var touch = null;

addForceTouchToElement(gift);

function onTouchStart(e){
    e.preventDefault();
    checkForce(e);
}

function onTouchMove(e){
    e.preventDefault();
    checkForce(e);
}

function onTouchEnd(e){
    e.preventDefault();
    touch=null;
}

function refreshForceValue(){
    var touchEvent = this;
    var forceValue = 0;

    if(touchEvent){
        forceValue = touchEvent.force || 0;
        setTimeout(refreshForceValue.bind(touch), 10);
    }else{
        forceValue = 0;
    }
    renderElement(forceValue);
}

function renderElement(forceValue){
    giftTop.style.webkitTransform = 'translate3d(-5%, -'+(forceValue*1000)+'%, 0) rotate(-'+(forceValue*100)+'deg)';
    giftText.style.webkitTransform = 'translate3d(-50%, -'+(50 + forceValue*300)+'%, 0) scale('+(.5 + forceValue*1.5)+')';
}

function addForceTouchToElement(elem){
    elem.addEventListener('touchstart',onTouchStart, false);
    elem.addEventListener('touchmove',onTouchMove, false);
    elem.addEventListener('touchend',onTouchEnd, false);
}