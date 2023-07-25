export class Tech_info{

    static show(): void{
        const buttons: Array<Element> = Array.from(document.querySelectorAll(".techs-icons"));
        let techText: HTMLElement | null = document.getElementById("tech-text");
  
        buttons.forEach(bt => {
            bt.addEventListener('click', () => {
                const tech = (bt as HTMLElement).dataset.tech;
  
                switch(tech){
                    case "java":
                        if (techText !== null) {
                            techText.innerHTML = `Java atualmente é minha linguagem principal, e é onde eu quero me especializar cada vez mais.`;
                        }
                        break;

                      case "spring":
                        if(techText !== null){
                          techText.innerHTML = `Spring é um framework de Java muito útil e que agiliza bastante o desenvolvimento.`;
                        }
                        break;

                      case "mysql":
                        if(techText !== null){
                          techText.innerHTML = `MySQL é o banco de dados relacional que eu domino atualmente. Já fiz alguns CRUDs em Java utilzando ele.`;
                        }
                        break;
                    
                    case "node":
                        if (techText !== null) {
                            techText.innerHTML = `Já utilizei muito o node para criar bots para o discord e entre outros projetos menores. Foi com ele que eu tive uma noção do Back-end.`;
                        }
                        break;
                    
                    case "ts":
                        if (techText !== null) {
                        techText.innerHTML = `O Typescript me ajudou muito a aprender POO e serviu de porta de entrada para o Java. (Utilizei o Typescript na construção deste site).`;
                      }
                      break;
  
                    case "html":
                      if (techText !== null){
                        techText.innerHTML = `Apesar de ser Backend, também sei utilizar o HTML para construir páginas. Porém, como não conheço frameworks frontend, ainda não me considero fullstack.`;
                      }
                      break;
  
                    case "css":
                      if (techText !== null){
                        techText.innerHTML = `Também possuo conhecimento básico em CSS. Apesar deste site ter sido feito com templetes de bootstrap, eu utilizei bastante o CSS em sua construção.`;
                      }
                      break;            
                }
            })
        })
    }
  }
  
  
        
