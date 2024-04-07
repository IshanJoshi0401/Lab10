document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').innerText = 'Text changed successfully!';
  });
  

  window.addEventListener('load', function() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  });
  
    window.addEventListener('load', function() {
    var newParagraph = document.createElement('p');
    newParagraph.innerText = 'New paragraph added dynamically!';
    document.getElementById('container').appendChild(newParagraph);
  });