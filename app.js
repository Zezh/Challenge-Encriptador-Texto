function textoEntregado()
{
    let encriptarTextoEntregado = document.getElementById('textoIngresado').value;
    return encriptarTextoEntregado;
}

function tamañoTextarea(textoTarea)
{
    textoTarea.style.height = '500px';
    textoTarea.style.width = '400px';    
}

function validadTexto(texto)
{
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptarTexto()
{
    const textoOriginal = document.getElementById('textoIngresado').value;
    /*const imagenes = document.getElementById('imagenes');
    imagenes.remove();*/   
 
    if(textoEntregado() == '')
    {
        let textareaIngreso = document.getElementById('textoIngresado');
        textareaIngreso.placeholder = 'No se puede dejar el campo vacio, por favor ingrese texto.';
    }
    else if(!validadTexto(textoOriginal))
    {
        alert("Por favor, ingrese solo letras minúsculas sin números ni caracteres especiales.");
        return;
    }
    else if(textoEntregado() != '')
    {
        let textareaRecibido = document.getElementById('textoRecibido');
        textareaRecibido.hidden = false;
        textareaRecibido.disabled = false;
        let btnCopiar = document.getElementById('btnCopy');
        btnCopiar.hidden = false;
        btnCopiar.disabled = false;
        const textareaEntregaEncriptacion = document.getElementById('textoRecibido');
        textareaEntregaEncriptacion.style.display = 'flex';
        /*const imagenes = document.getElementById('imagenes');
        imagenes.remove();*/    
        //const textoOriginal = document.getElementById('textoIngresado').value;      //Const para recibir el texto ingreasado por el usuario
        const textoEncriptado = encriptacionTexto(textoOriginal);                   //Const para encriptar el texto recibido usando la funcion encriptacionTexto
        document.getElementById('textoRecibido').innerHTML = textoEncriptado;       //Mostrar el texto encriptado   
        limpiarCaja();     
    }
}

function desencriptarTexto()
{
    const textoOriginal = document.getElementById('textoIngresado').value;
   
    if(textoEntregado() == '')
    {
        let textareaIngreso = document.getElementById('textoIngresado');
        textareaIngreso.placeholder = 'No se puede dejar el campo vacio, por favor ingrese texto.';
    }
    else if(!validadTexto(textoOriginal))
    {
        alert("Por favor, ingrese solo letras minúsculas sin números ni caracteres especiales.");
        return;
    }
    else if(textoEntregado() != '')
    {
        let textareaRecibido = document.getElementById('textoRecibido');
        textareaRecibido.hidden = false;
        textareaRecibido.disabled = false;
        let btnCopiar = document.getElementById('btnCopy');
        btnCopiar.hidden = false;
        btnCopiar.disabled = false;
        const textareaEntregaEncriptacion = document.getElementById('textoRecibido');
        textareaEntregaEncriptacion.style.display = 'flex';
        /*const imagenes = document.getElementById('imagenes');
        imagenes.remove();*/    
        //const textoOriginal = document.getElementById('textoIngresado').value;      //Const para recibir el texto ingreasado por el usuario
        const textoDesencriptado = desencriptacionTexto(textoOriginal);                   //Const para encriptar el texto recibido usando la funcion encriptacionTexto
        document.getElementById('textoRecibido').innerHTML = textoDesencriptado;       //Mostrar el texto encriptado   
        limpiarCaja();     
    }
}

function encriptacionTexto(texto) 
{
    let textoEncriptado = texto
        .replace(/e/g, "enter") //Reemplaza todas las "e" por "enter"
        .replace(/i/g, "imes")  //Reemplaza todas las "i" por "imes"
        .replace(/a/g, "ai")    //Reemplaza todas las "a" por "ai"
        .replace(/o/g, "ober")  //Reemplaza todas las "o" por "ober"
        .replace(/u/g, "ufat"); //Reemplaza todas las "u" por "ufat"    
    return textoEncriptado;
}

function desencriptacionTexto(texto)
{
    let textoDesencriptado = texto
        .replace(/enter/g, "e") //Reemplaza todos las "enter" por "e"
        .replace(/imes/g, "i")  //Reemplaza todos las "ines" por "i"
        .replace(/ai/g, "a")    //Reemplaza todos las "ai" por "a"
        .replace(/ober/g, "o")  //Reemplaza todos las "ober" por "o"
        .replace(/ufat/g, "u"); //Reemplaza todos las "ufat" por "u"    
    return textoDesencriptado;
}

function limpiarCaja()
{
    let textareaIngreso = document.getElementById('textoIngresado');
    textareaIngreso.value = '';
}

function copiarTexto()
{
    const textoRecibido = document.getElementById('textoRecibido');

    textoRecibido.select();
    textoRecibido.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(textoRecibido.value);
}