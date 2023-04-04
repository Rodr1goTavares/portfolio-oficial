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
  
                    case "js":
                      if (techText !== null){
                        techText.innerHTML = `O Javascript foi a primeira linguagem que eu aprendi, foi com ela que eu adiquiri toda a base da programação.`;
                      }
                      break;
  
                    case "html":
                      if (techText !== null){
                        techText.innerHTML = `É a ferramenta padrão do front end. já desenvolvi inúmeras páginas com ele.`;
                      }
                      break;
  
                    case "css":
                      if (techText !== null){
                        techText.innerHTML = `Também é outra ferramenta de suma importância para o desenvolvimento Front-end, tenho muita bagaem com ela e com o HTML.`;
                      }
                      break;
  
                    case "bootstrap":
                      if (techText !== null){
                        techText.innerHTML = `É uma ferramenta que agiliza bastante o desenvolvimento Front-end. Foi bastante útil na construção deste site.`;
                      }
                      break;
  
                    case "git":
                      if (techText !== null){
                        techText.innerHTML = `É uma ferramente de versionamento extremamente útil. Caso queira acessar o meu github e ver meus reposítórios, basta ir ao início desta página.`;
                      }
                      break;              
                }
            })
        })
    }
  }
  
  
        
