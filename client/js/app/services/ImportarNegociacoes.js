class ImportarNegociacoes{

    criar(){
        let xhr = new XMLHttpRequest;
        xhr.open("GET", "negociacoes/semana");
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4){

                if(xhr.status == 400){
                    JSON.parse(xhr.responseText);
                }else{
                    console.log(xhr.responseText);
                }

            }

        }
    }

}