function homeRedirect(){

    if(window.location.pathname == "/index.html"){
        return 0;
    }
    
    else{
        window.location.pathname = "/index.html"
    }

}