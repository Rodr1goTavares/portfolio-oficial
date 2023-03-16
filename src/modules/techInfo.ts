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
                            techText.innerHTML = `Java é a linguagem que eu estudo atualmente. Sempre estive só no Javascript e Typescript, porém, gostei muito do Java e desejo fazer dela a minha linguagem principal.`;
                        }
                        break;
                    
                    case "node":
                        if (techText !== null) {
                            techText.innerHTML = `Já utilizei muito o node para criar bots para o discord. Com ele, eu tive um boa bagagem com consumo de APIs, sem contar o uso do NPM, que é fundamental.`;
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
  
                    case "sass":
                      if (techText !== null){
                        techText.innerHTML = `SCSS é uma ferramenta extremamente útil, pois adiciona várias funcionalides lógicas ao CSS.`;
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
  
  
        
