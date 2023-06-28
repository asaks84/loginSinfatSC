// formatação campo CPF/CNPJ
const element = document.querySelector('form #username');
const maskCPF = {
  mask: [
    {
      mask: '000.000.000-00',
      max: 11
    },
    {
      mask: '00.000.000/0000-00',
      min: 12
    }
  ]
  
};
const mask = IMask(element, maskCPF);

// background random
(function randomBg(){
  const bigSize = {
    1: {
      url: "url('./static/bg/01.jpg')",
      description: "whatever it is"
      }, 
    2: {
      url: "url('./static/bg/02.jpg')",
      description: "whatever it is"
      },
    3: {
      url: "url('./static/bg/03.jpg')",
      description: "whatever it is"
      }
  }

  const num = Object.keys(bigSize).length;
  const random = Math.floor((Math.random() * num + 1));
  document.querySelector('section').style.backgroundImage = bigSize[random].url;
  document.querySelector('footer small').innerHTML = bigSize[random].description;
  
})();
