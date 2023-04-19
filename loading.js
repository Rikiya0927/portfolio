// loading画面を表示する
function showLoadingScreen() {
    document.getElementById("loading").style.display = "flex";
}
  
// loading画面を非表示にする
function hideLoadingScreen() {
document.getElementById("loading").style.display = "none";
}

// ページの読み込みが完了したらloading画面を非表示にする
window.addEventListener("load", function() {
hideLoadingScreen();
});
