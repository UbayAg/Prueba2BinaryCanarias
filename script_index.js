function changeState(id){
    let opc = document.getElementById(id)
    let clases = opc.classList
    
    if (clases.contains('opcDefecto')) {
        clases.replace('opcDefecto', 'opcActivado')
        
    } else if (clases.contains('opcActivado')) {
        clases.replace('opcActivado', 'opcDesactivado')
        
        } else if (clases.contains('opcDesactivado')) {
            clases.replace('opcDesactivado', 'opcDefecto')
            } 
}