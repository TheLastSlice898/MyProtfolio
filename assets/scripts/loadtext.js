       function fetchtext(text){
       fetch(`assets/content/${text}.html`)
        .then(res => res.text())
        .then(data =>{
            document.getElementById(text).innerHTML = data
        });
       }