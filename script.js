const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});


function switchVisible() {
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'flex';
            document.getElementById('Div2').style.display = 'none';
        }
        else {
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div1').style.display = 'flex';
        }
    }
}


function switchVisiblee() {
    if (document.getElementById('Div2')) {

        if (document.getElementById('Div2').style.display == 'none') {
            document.getElementById('Div2').style.display = 'flex';
            document.getElementById('Div1').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'flex';
        }
    }
}


var typed = new Typed('#element', {
    strings: ['web devloper.', 'web devlopfffer','wffeb devloper','wffebf devloper','wfxfeb devloper','music','play'],
    typeSpeed: 50,
  });