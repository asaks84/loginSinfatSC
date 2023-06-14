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
  const bigSize = [
                  "url('./static/bg/01.jpg')",
                  "url('./static/bg/02.jpg')",
                  "url('./static/bg/03.jpg')"
                ];

  const num = bigSize.length;
  const random = Math.floor(Math.random() * num) + 0;
  document.querySelector('section').style.backgroundImage=bigSize[random];
})();
