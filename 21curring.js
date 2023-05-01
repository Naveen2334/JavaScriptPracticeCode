/*function cuboidvol(l){
    return function(b){
        return function(h){
            return l*b*h;
        }
    }
}
k=cuboidvol(2)(5)(8);
console.log(k);*/
/*function si(p){
    return si(r)
    {
        return si(t)
        {
            return (p*r*t);
        }
    }
    
}
k= si(1000)(15)(2);
console.log(k);*/
function outer(){
    let a = 10;
    console.log(a);
    function inner() {
        let a = 10;
        console.log(a);
        function inner() {
            console.log(a);
            
        }
        return inner;
    }

}
outer()();