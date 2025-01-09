//dados
const nameinp = document.getElementById("nameInp");
const msginp = document.getElementById("msgInp");
//area de resultado
const areaResult = document.getElementById('exemple-result');
areaResult.style.display = "none";

//modal
const modalDiv = document.createElement("div");
const modalText = document.createElement("h1");


class Person{
        constructor(){
            this.reports = [];
        }

        //ADICIONA
        add(ok){
            //verifica se tá vazio
            try{
                if(!ok){
                    throw new Error("Preencha");//gera erro
                }
                
            const newReport = {
                    ok
                };
                this.reports.push(newReport);//coloca no array de objetos o tal objeto

                // console.log(this.reports);

                this.reading()//vai ver

                //limpa
                nameinp.value='';

                modalText.innerText = '';//recebe o erro
            }catch(erro){
                openModal(erro.message)
            }
            
        }

        // MOSTRA
        reading(){
            areaResult.style.display = "flex";
            areaResult.innerHTML = '';


            this.reports.forEach((reportFor,i)=>{
                //AREAS DE VISÃO
                const div = document.createElement('div')
                div.className=`divContent`;

                const h4 = document.createElement('h4');
                h4.className = "text-h4";
                h4.textContent = reportFor.names;

                const p = document.createElement('p');
                p.className = "text-p";
                p.textContent= reportFor.texts;

                const deleteBTN = document.createElement('button');
                deleteBTN.textContent ="Deletar"
                deleteBTN.className = "btnDel";
                deleteBTN.onclick = ()=>this.delete(i);
            

                areaResult.appendChild(div)
                div.appendChild(h4);
                div.appendChild(p);
                div.appendChild(deleteBTN);

                

            });

        };

        // DELETA 
        delete(i){
            this.reports.splice(i,1);
            this.reading();
        };
        

    }

const related = new Person();//instanciamento



//clique/submit/enter
const form = document.getElementById("form");
form.addEventListener("submit", (event)=> {
    event.preventDefault();//clicque



        const name = nameinp.value.trim();


        related.add(name);

    


});   


function openModal(message){
    alert(message);

    // modalDiv.id = "modalDiv";
    // modalDiv.style.display="flex";
    // document.body.append(modalDiv);//coloca ele no site


    // modalText.className = "text-h1";

    // modalText.innerText = message;//recebe o erro
    // modalDiv.append(modalText);//coloca o testo
    
    // setTimeout(closeModal,10000)
}

// function closeModal(){
//     modalDiv.style.display = "none"
// }
