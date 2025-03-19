document.addEventListener("DOMContentLoaded", function () {
    // ローダー処理
    const loader = document.querySelector(".loader");
    if (loader) {
        setTimeout(() => {
            loader.style.transition = "opacity 0.5s ease";
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500); // トランジション時間に合わせた遅延
        }, 3000); // 3秒間表示
    }

    // メニューボタン処理
    const menuBtn = document.querySelector('.menu_btn');
    const gnav = document.querySelector('.gnav');

    if (menuBtn && gnav) {
        menuBtn.addEventListener('click', () => {
            // トグルクラスを追加/削除
            gnav.classList.toggle('active');

            // アクセシビリティ対応: aria-expanded属性の更新
            const isExpanded = gnav.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });

        // リンク押下時にアコーディオンを閉じる
        const links = gnav.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // アコーディオンを閉じる
                gnav.classList.remove('active');

                // aria-expandedをfalseに設定
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        //領域外を押下時にアコーディオンを閉じる
        // 領域外をクリックした場合に閉じる
        document.addEventListener('click', (event) => {
            // クリックした場所がmenuBtnやgnavでない場合
            if (!menuBtn.contains(event.target) && !gnav.contains(event.target)) {
                gnav.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
