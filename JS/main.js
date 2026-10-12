
// category

const filterButtons = document.querySelectorAll('.filter-tag-btn');
  const productCards = document.querySelectorAll('.menu-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      // 1. Pindahkan warna aktif ke tombol yang diklik
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. Ambil target kategori (filling, non-coffee, dll)
      const selectedFilter = button.getAttribute('data-filter');

      // 3. Saring kartu menu
      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (cardCategory === selectedFilter) {
          card.classList.remove('hide'); // Tunjukkan yang cocok
        } else {
          card.classList.add('hide');    // Sembunyikan yang beda
        }
      });
    });
  });
// 1 memanggil menu
// 2 manggil navbar

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('ri-close-line')
    navbar.classList.toggle('active')
}

