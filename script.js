document.addEventListener('DOMContentLoaded', function() {
    // 1. !!! SUBSTITUA [SEU_NUMERO_COM_DDD] PELO SEU TELEFONE COMPLETO (APENAS NÚMEROS) !!!
    const phoneNumber = "5511947412026"; // Exemplo: 55 (código do país) + 11 (DDD) + 999998888 (número)

    // Mensagem que o médico verá pré-preenchida ao clicar no botão
    const welcomeMessage = "Olá, escaneei o QR Code do evento Certificação de Implantes Hormonais - Dr. Pablo Mello e gostaria de avançar com meu cadastro na Stin Pharma.\n\n" +
                           "--- 🗂️ CADASTRO – PESSOA FÍSICA ---\n" +
                           "DADOS NECESSÁRIOS\n" +
                           "• Nome completo:\n" +
                           "• CRM:\n" +
                           "• CPF ou CNPJ:\n" +
                           "• RG ou CNH:\n" +
                           "• E-mail:\n" +
                           "• Endereço completo (com CEP):\n" +
                           "• Telefones:\n\n" +
                           "DOCUMENTOS (Enviar fotos):\n" +
                           "1. Carteira do Conselho (frente e verso) ou declaração + documento com foto:\n" +
                           "2. RG/CPF ou CNH:\n" +
                           "3. Comprovante de residência (em nome do titular):\n" +
                           "4. Termo de Fornecimento e Termo de Responsabilidade preenchidos e assinados (legíveis):\n\n" +
                           "--- 🗂️ CADASTRO – CNPJ ---\n" +
                           "• Faturamento pelo CNPJ (Sim/Não):\n" +
                           "• Contrato Social (foto):\n" +
                           "• Alvará de Funcionamento:\n" +
                           "• Alvará da Vigilância Sanitária:";

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
