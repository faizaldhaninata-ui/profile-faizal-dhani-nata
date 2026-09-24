const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => { nav.style.display = nav.style.display === 'flex' ? '' : 'flex'; nav.style.flexDirection = 'column'; nav.style.position = 'absolute'; nav.style.top = '70px'; nav.style.right = '7vw'; nav.style.padding = '20px'; nav.style.background = '#121215'; nav.style.color = '#f4f4f5'; nav.style.border = '1px solid #27272a'; });
if (nav && !document.querySelector('a[href="artikel.html"]')) { const link = document.createElement('a'); link.href = 'artikel.html'; link.textContent = 'Artikel'; nav.appendChild(link); }
document.querySelectorAll('.article-grid article').forEach(card => { card.style.cursor = 'pointer'; card.addEventListener('click', () => { window.location.href = 'artikel.html'; }); });
