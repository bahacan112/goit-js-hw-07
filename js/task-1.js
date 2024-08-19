const ulList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', ulList.length);
for (let i = 0; i < ulList.length; i++) {
  console.log('Category:', ulList[i].querySelector('h2').textContent);
  console.log('Elements:', ulList[i].querySelectorAll('li').length);
}
