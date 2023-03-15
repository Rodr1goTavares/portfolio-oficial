import { SendEmail } from "./modules/sendEmail";
import { Tech_info } from "./modules/techInfo";


document.addEventListener('DOMContentLoaded', () => {

    //funcionalidades
    Tech_info.show();
    SendEmail.send();

    //footer
    const dataAtual = new Date().getFullYear();
    const data = document.getElementById('date') as HTMLElement;
    data.innerHTML = `${dataAtual}`;
})
  


