class Calculo{
    constructor(cantidadTickets,descuento,importe){
        this.descuento = descuento;
        this.cantidadTickets = cantidadTickets;
        this.importe = importe;
    }

    calcularSuma(){
        this.importe = (this.cantidadTickets * 200) / this.descuento;
        this.mostrarResultado()
    }
    obtenerInformacion(){
        
        let categoria = document.getElementById('categoria')
        let btn = document.getElementById('btn__resumen')

        btn.addEventListener('click', () =>{
            let opcion = +(categoria.options[categoria.selectedIndex].value)
            let cantidad = document.getElementById('cantidad').value;
            let mensaje = document.getElementById('mensajeError')

            if(cantidad <= 0){
                mensaje.innerText = 'Ingrese una cantidad válida.'
            }

            else{
                mensaje.innerText = ''
                this.descuento = opcion;
                this.cantidadTickets = cantidad;
                this.calcularSuma()
            }
        })
    }

    mostrarResultado(){
        let importe = document.getElementById('amount')
        importe.innerHTML = `Total a pagar: $ ${new Intl.NumberFormat("de-DE").format(Math.round(this.importe))}`
    }

    
}
const calculo = new Calculo()
calculo.obtenerInformacion()

