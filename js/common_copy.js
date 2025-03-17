// ページ読み込み完了後にローディング画面を3秒表示し、その後に非表示にする
document.addEventListener("DOMContentLoaded", function () {
  // ローダー要素を取得
  const loader = document.querySelector(".loader");

  // ローダー要素が存在する場合
  if (loader) {
      // ページ読み込み後、3秒待機してからフェードアウト開始
      setTimeout(() => {
          // フェードアウトのためのトランジションを適用
          loader.style.transition = "opacity 0.5s ease";

          // ローダーの透明度を0に設定
          loader.style.opacity = "0";

          // トランジション後にローダーを非表示にする
          setTimeout(() => {
              loader.style.display = "none";
          }, 500); // トランジションに合わせた0.5秒の遅延
      }, 100); // 2秒間表示
  }
});

