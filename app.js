
// const btnCalcular = document.getElementById("btnCalcular")
// const display = document.getElementById("display")


// function Calcular(){
//     display.value = `` 
//     let input = document.getElementById("input").value
//     if(input !== ''){
//          input = parseInt(input)
//          fatorial(input)
//     }else{
//         alert("Ops! Parece que voce esqueceu de algo!")
//     }    
// }

// function fatorial(valor){
//     let multiplicar = 1;

//     if(valor == 0){
//         //se o numero for igual a zexo retorne 1
//       return 1;

//     }else{
//         //caso contrario 
//         // i recebe o parametro numero, enquanto i for diferente de zero, subtraia i
      
//     for(let i = valor; i != 0; i-- ){
//     //O laço é execultado e acada execuçao ele passa um novo valor para mult e mult mutiplica esse valor por i
//             multiplicar *= i;

//             let X = '*'
//             if(i == 1){
//                 X = ''
//             }
//             display.value += `${i} ${X} ` 
//         }
//     }
//     display.value += ` = ${multiplicar}` 
//   }
  
class fatoriall{
    constructor(){
        this.btnCalcular = document.getElementById("btnCalcular")
        this.display = document.getElementById("display")   
          
    }

    Calcular(){
        this.display.value = ``
        let input = document.getElementById("input").value
        if(input != ''){
            input = parseInt(input)
            
            this.fatorial(input)
        }else{
            alert("Ops! Parece que voce esqueceu de algo!")
        }   
    }

    fatorial(valor){
    let multiplicar = 1;
    if(valor == 0){
      return 1;
    }else{
        this.display.value = `  ${valor}! =  `
        for(let i = valor; i != 0; i-- ){
                multiplicar *= i;
                let X = '*'
                if(i == 1) X = ''
               

                this.display.value += `${i} ${X} ` 
            }
    }
        
        this.display.value += ` = ${multiplicar}` 
    }
}

let Fatorial = new fatoriall()