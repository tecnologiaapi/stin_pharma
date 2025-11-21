document.addEventListener('DOMContentLoaded', function() {
    // 1. !!! SUBSTITUA [SEU_NUMERO_COM_DDD] PELO SEU TELEFONE COMPLETO (APENAS NÚMEROS) !!!
    const phoneNumber = "5511947412026"; // Exemplo: 55 (código do país) + 11 (DDD) + 999998888 (número)

    // Mensagem que o médico verá pré-preenchida ao clicar no botão
    const welcomeMessage = "Olá, escaneei o QR Code do evento Dr. Pablo Mello – Implantes e gostaria de iniciar meu cadastro na Stin Pharma.\n\n" +
                           "*DADOS PARA CADASTRO*\n\n" +
                           "*CADASTRO PESSOA FÍSICA*\n" +
                           "➡️Nome completo:\n" +
                           "➡️Número do CRM:\n" +
                           "➡️CPF/CNPJ:\n" +
                           "➡️RG OU CNH:\n" +
                           "➡️Email:\n" +
                           "➡️Endereço Completo de Entrega:\n" +
                           "➡️CEP:\n" +
                           "➡️Telefones:\n\n" +
                           "DOCUMENTOS NECESSÁRIOS\n" +
                           "1. ➡️Cópia (foto): Carteira do Conselho (FRENTE E VERSO), se não possuir, pode ser a declaração e um documento com foto;\n" +
                           "2. ➡️Cópia (foto): RG/CPF OU CNH;\n" +
                           "3. ➡️Cópia (foto): Comprovante de Residência (em nome do titular do cadastro);\n" +
                           "4. ➡️Termo de Fornecimento/ Termo de Responsabilidades, preenchidos e assinados. (Legível)\n\n" +
                           "*CADASTRO CNPJ*\n" +
                           "➡️Faturamento para o CNPJ\n" +
                           "➡️Cópia (foto): Contrato social\n" +
                           "➡️Cópia (foto): Alvará de funcionamento\n" +
                           "➡️Cópia (foto): Alvara da vigilância Sanitária.";

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
