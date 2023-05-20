const form = document.getElementById('form');
const tag = [...document.getElementsByTagName('form')];

form.addEventListener('change', () =>{
  document.body.classList.toggle('dark');
});
 