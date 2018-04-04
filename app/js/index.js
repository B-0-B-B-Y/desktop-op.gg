const { ipcRenderer } = require('electron');
const webview = document.querySelector('webview')


//Setup minimise button
var buttonBack = document.getElementById('btn-back')

buttonBack.addEventListener('click', function () {
  webview.goBack()
})

//Setup minimise button
var buttonForward = document.getElementById('btn-forward')

buttonForward.addEventListener('click', function () {
  webview.goForward()
})

//Setup minimise button
var buttonHide = document.getElementById('btn-hide')

buttonHide.addEventListener('click', function () {
  ipcRenderer.send('button-press-hide', 'Hide the app')
})

//Setup close button
var buttonClose = document.getElementById('btn-close')

buttonClose.addEventListener('click', function () {
  ipcRenderer.send('button-press-close', 'Close the app')
})

//Prevent menu bar from being selectable with mouse click + drag
var unFocus = function () {
    if (document.selection) {
        document.selection.empty()
    } else {
        window.getSelection().removeAllRanges()
    }
}

document.getElementById('menu').onmousemove = function () {
    unFocus()
}

document.getElementById('menu').onmouseup = function () {
    unFocus()
}
