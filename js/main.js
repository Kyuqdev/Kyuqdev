function copyIframe(){
    querySel = document.querySelector("code");
    navigator.clipboard.writeText(querySel.innerText);
    window.getSelection().selectAllChildren(querySel);
}
window.copyIframe = copyIframe;