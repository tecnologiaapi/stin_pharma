document.addEventListener('DOMContentLoaded', function() {
    // 1. !!! SUBSTITUA [SEU_NUMERO_COM_DDD] PELO SEU TELEFONE COMPLETO (APENAS NÚMEROS) !!!
    const phoneNumber = "5511999998888"; // Exemplo: 55 (código do país) + 11 (DDD) + 999998888 (número)

    // Mensagem que o médico verá pré-preenchida ao clicar no botão
    const welcomeMessage = "Olá, escaneei o QR Code do evento Dr. Pablo Mello – Implantes e gostaria de iniciar meu cadastro na Stin Pharma.";

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(welcomeMessage);

    // Cria o link completo do WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Atualiza o atributo href do botão
    const whatsappButton = document.getElementById('whatsapp-link');
    if (whatsappButton) {
        whatsappButton.href = whatsappLink;
    }
});