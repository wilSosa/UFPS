

function calcular(){
const primer = parseFloat(document.querySelector("#primer").value);
const segundo = parseFloat(document.querySelector("#segundo").value);
const tercer = parseFloat(document.querySelector("#tercer").value);
const examen = parseFloat(document.querySelector("#examen").value);

    const definitiva = ((primer + segundo + tercer)/3*0.7) + examen * 0.3;

    

    
    
    document.querySelector("#definitiva").innerHTML=definitiva;
    
}

