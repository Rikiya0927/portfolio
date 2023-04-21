// loading画面を表示する
function showLoadingScreen() {
    document.getElementById("load").style.display = "flex";
}

// // fade画面を表示する
// function showLoadingFadeScreen() {
//     document.getElementById("fadeout").style.display = "flex";
// }
  
// loading画面を非表示にする
function hideLoadingScreen() {
    document.getElementById("load").style.display = "none";
}

// ページの読み込みが完了したらloading画面を非表示にする
window.addEventListener("load", function() {
    // 2.5秒後にloading画面を非表示にする
    setTimeout(function() {
        // showLoadingFadeScreen();
        hideLoadingScreen();
    }, 2500);
});

// // ページの読み込みが完了したらloading画面を非表示にする
// window.addEventListener("load", function() {
//     // 2.5秒後にloading画面を非表示にする
//     setTimeout(function() {
//       showLoadingFadeScreen();
//       setTimeout(function() {
//         hideLoadingScreen();
//       }, 1000); // fade画面が表示されてから1秒後にloading画面を非表示にする
//     }, 2500);
//   });

// // loading画面を非表示にする
// function hideLoadingScreen() {
//     document.getElementById("load").style.display = "none";
// }
  
// // ページの読み込みが完了したらloading画面を非表示にする
// window.addEventListener("load", function() {
//     // ロードが完了した時間を取得
//     var loadEndTime = new Date().getTime();
  
//     // loading画面を非表示にする
//     hideLoadingScreen();
  
//     // loading画面の表示時間を設定
//     var loadingTime = loadEndTime - loadStartTime;
//     var delayTime = loadingTime < 2000 ? 2000 - loadingTime : 0;
  
//     // 1秒後にloading画面を非表示にする
//     setTimeout(function() {
//         hideLoadingFadeScreen();
//     }, 1000 + delayTime);
// });
  
// // loading画面を表示する
// function showLoadingScreen() {
//     document.getElementById("load").style.display = "flex";
// }
  
// // fade画面を表示する
// function showLoadingFadeScreen() {
//     document.getElementById("fadeout").style.display = "flex";
// }

// // メインページを非表示にする
// document.documentElement.style.display = "none";

// // 2秒後にメインページを表示する
// setTimeout(function() {
//     // メインページを表示する
//     document.documentElement.style.display = "block";
  
//     // loading画面を非表示にする
//     hideLoadingScreen();
  
//     // fade画面を表示する
//     showLoadingFadeScreen();
// }, 2000);

// // ロード開始時間を取得する
// var loadStartTime = new Date().getTime();

// // loading画面を表示する
// showLoadingScreen();


  
