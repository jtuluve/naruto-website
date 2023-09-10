'use client'



let lists = document.querySelectorAll('.charList li');

lists.forEach(list => {
  list.onclick = (e) => {
    lists.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    e.target.classList.add('active');
    document.getElementsByClassName('visible')[0]?.classList.remove('visible');
    document.getElementById(e.target.dataset.for)?.classList.add('visible');
  }
});
