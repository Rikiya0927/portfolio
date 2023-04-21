// loading画面を表示する
function showLoadingScreen() {
    document.getElementById("load").style.display = "flex";
}

// loading画面を非表示にする
function hideLoadingScreen() {
    document.getElementById("load").style.display = "none";
}

ページの読み込みが完了したらloading画面を非表示にする
window.addEventListener("load", function() {
    // 2.5秒後にloading画面を非表示にする
    setTimeout(function() {
        hideLoadingScreen();
    }, 2500);
});
