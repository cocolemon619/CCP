document.addEventListener('DOMContentLoaded', function () {
    const menuHeader = document.querySelector('.menuHeader');
    if (menuHeader) {
      const button = document.createElement('button');
      button.innerText = 'My Button';
      button.addEventListener('click', () => {
        // ボタンがクリックされたときの処理をここに書く
        alert('Button clicked!');
      });
      menuHeader.appendChild(button);
    }
  });