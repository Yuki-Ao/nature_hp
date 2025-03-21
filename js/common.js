document.addEventListener("DOMContentLoaded", function () {
  // 非同期関数を使用してローダー処理を実装
  const initLoader = async () => {
      const loader = document.querySelector(".loader");
      if (loader) {
          loader.style.transition = "opacity 0.5s ease";
          loader.style.opacity = "0";
          await new Promise(resolve => setTimeout(resolve, 500));
          loader.style.display = "none";
      }
  };

  // メニューボタン処理
  const initMenu = () => {
      const menuBtn = document.querySelector('.menu_btn');
      const gnav = document.querySelector('.gnav');

      if (menuBtn && gnav) {
          menuBtn.addEventListener('click', () => {
              gnav.classList.toggle('active');
              const isExpanded = gnav.classList.contains('active');
              menuBtn.setAttribute('aria-expanded', isExpanded);
          });

          const links = gnav.querySelectorAll('a');
          links.forEach(link => {
              link.addEventListener('click', () => {
                  gnav.classList.remove('active');
                  menuBtn.setAttribute('aria-expanded', 'false');
              });
          });

          document.addEventListener('click', (event) => {
              if (!menuBtn.contains(event.target) && !gnav.contains(event.target)) {
                  gnav.classList.remove('active');
                  menuBtn.setAttribute('aria-expanded', 'false');
              }
          });
      }
  };

  // Intersection Observer を使用して inview を検知
  const initInview = () => {
      const inviewElements = document.querySelectorAll('.inview');
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-show');
              }
          });
      });

      inviewElements.forEach(el => observer.observe(el));
  };

  // 初期化関数呼び出し
  initLoader();
  initMenu();
  initInview();
});
