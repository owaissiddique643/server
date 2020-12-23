function get(){

    const Http = new XMLHttpRequest();
    const url='http://192.168.50.210:3000/bulb';
    Http.open("GET", url);
    
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({name:"John Rambo", time:"2pm"}));
    
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
    }
    
    function post(){
        const Http = new XMLHttpRequest();
    const url='http://192.168.50.210:3000/bulb';
    Http.open("POST", url);
    
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({name:"John Rambo", time:"2pm"}));
    
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    }
    
    
    function put(){
        const Http = new XMLHttpRequest();
        const url='http://192.168.50.210:3000/bulb';
        Http.open("PUT", url);
        Http.setRequestHeader("Content-Type", "application/json");
        Http.send(JSON.stringify({name:"John Rambo", time:"2pm"}));
        
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }
    }
    
    function del(){
        const Http = new XMLHttpRequest();
        const url='http://192.168.50.210:3000/bulb';
        Http.open("DEL", url);
        Http.setRequestHeader("Content-Type", "application/json");
        Http.send(JSON.stringify({name:"John Rambo", time:"2pm"}));
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }
    }