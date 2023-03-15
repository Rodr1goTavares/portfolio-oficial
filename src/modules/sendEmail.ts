export class SendEmail{
    public static send(): void{
        const bt = (<HTMLButtonElement>document.getElementById('confirm-email'));
        bt.addEventListener('click', () => {
            const name = (<HTMLInputElement>document.getElementById('name')).value;
            const email = (<HTMLInputElement>document.getElementById('email')).value;
            const message = (<HTMLInputElement>document.getElementById('message')).value;

            const emailBody = `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`;
            window.location.href = `mailto:rodr1gowzxz2@gmail.com?subject=Assunto do e-mail&body=${encodeURIComponent(emailBody)}`;
        })
    }
}