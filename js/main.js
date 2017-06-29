(function(){
    var arr =[];

  /* var jumbotron=document.createElement('div');*/

    var jum=document.getElementById('main');

    var row1 = document.createElement('row');
    var divM = document.createElement('div');
    var divM1 = document.createElement('div');
    divM1.style.margin='1vh';
    row1.appendChild(divM);
    jum.appendChild(divM1);
    jum.appendChild(row1);
    var btn=document.createElement('button');
    var btn2=document.createElement('button');
    var btn3=document.createElement('button');
    var btn4=document.createElement('button');
    btn.setAttribute('class', 'btn btn-warning mainB');
    btn2.setAttribute('class', 'btn btn btn-primary mainB');
    btn3.setAttribute('class', 'btn btn btn-danger mainB');
    btn4.setAttribute('class', 'btn btn btn-info mainB');
    btn.innerHTML='setting';
    btn2.innerHTML='run';
    btn3.innerHTML='sort';
    btn4.innerHTML='clear';

    divM1.appendChild(btn);
    divM1.appendChild(btn2);
    divM1.appendChild(btn3);
    divM1.appendChild(btn4);

    var count=6;
    var minNum=1;
    var maxNum=49;
    var sortUp='';

    var s=document.getElementById('set');
    var cl='';
    btn.addEventListener('click', function(){

        if(cl=='close') {
            console.log(cl);
            s.setAttribute('hidden',true);
            cl='open';
        }
        else{
            console.log(cl);
            s.removeAttribute('hidden');
            cl='close';
        }
    })

    function getRandomArbitrary(min, max) {
        var r= Math.floor(Math.random() * ((max - min)+1));
        var r1=parseInt(min)+parseInt(r) ;
        console.log(r1);
        return r1;
    }

    btn2.addEventListener('click',function(){

        rundom();
    });
    btn3.addEventListener('click', function(){
        if(sortUp=='up'){
            sortUp='down';
            btn3.innerHTML='sort down'
            console.log(sortUp);
        }else{
            sortUp='up';
            btn3.innerHTML='sort up'
            console.log(sortUp);
        }
    });

    btn4.addEventListener('click',function(){
        sortUp='';
        while(row1.firstChild){
            row1.removeChild(row1.firstChild);
        }

        for(var i=0;i<count;i++){
            var circle = document.createElement('div');
            circle.setAttribute('id', 'id' + i);
            circle.setAttribute('class', 'circle col-md-2');

            row1.appendChild(circle);
        }

    });
    document.getElementById('setNum').addEventListener('click',function(){
        setNumber();
    });
    document.getElementById('setInt').addEventListener('click',function(){
        setInt();
    })


    function compare(a,b){
        return a-b;
    }
    function rever(a,b){
        return b-a;
    }
    var array=[];
    function rundom(){
        while(row1.firstChild){
            row1.removeChild(row1.firstChild);
        }
        var set= new Set();
        console.log(count+' count');
        while(set.size<count){
            var rund=getRandomArbitrary(minNum, maxNum);
            set.add(rund);
        }
        if(sortUp=='up'||sortUp=='down'){
            if(sortUp=='up'){
                array=[...set];
                array.sort(compare);
                set.clear();
                set= new Set(array);
            }
            if(sortUp=='down'){
                array=[...set];
                array.sort(rever);
                set.clear();
                set= new Set(array);
               }
        }
        set.forEach(function(num){
            var circle = document.createElement('div');
            circle.setAttribute('id', 'id' + num);
            circle.setAttribute('class', 'circle col-md-2');
            circle.innerHTML=num;
            row1.appendChild(circle);

        } );
    }

    function setNumber(){
         count=document.getElementById('sNum').value;
        console.log(count+'c');
        rundom();

    }
    function setInt(){
        minNum=document.getElementById('minIn').value;
        maxNum=document.getElementById('maxIn').value;



    }


})()