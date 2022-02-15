var cel=document.getElementById('cel');
var fah=document.getElementById('fah');
var kel=document.getElementById('kel');

cel.addEventListener('input', function(){
    let c=this.value;
    let f= (c*9/5)+32;
    fah.value=f;
    var k= Number(c) +Number(273.15) ;
    kel.value=k;
});
fah.addEventListener('input', function(){
    let f=this.value;
    let c=(f-32)*5/9;
    cel.value=c;
    let k= (Number(f)-Number(273.15))*9/5;
    kel.value=k;
});


kel.addEventListener('input', function(){
    let k=this.value;
    let f= (k*9/5)+32;
    fah.value=f;
    let c= Number(k)-Number(273.15);
    cel.value=c;
});