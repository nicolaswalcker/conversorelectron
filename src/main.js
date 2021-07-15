var clipboard = new ClipboardJS(".c-copyBtn");

new Vue({
  el: "#app",
  data: {
    darkModeClass: '',
    imgSrc:'./assets/img/moon.svg',
    convertedNumber: ''
  },
  methods: {
    switchMode(){
      if (this.darkModeClass == ''){
        this.imgSrc = './assets/img/sun.svg';
        this.darkModeClass = 'dark-mode'
      }else if (this.darkModeClass == 'dark-mode'){
        this.imgSrc = './assets/img/moon.svg';
        this.darkModeClass = ''
      }
    }
  },

});