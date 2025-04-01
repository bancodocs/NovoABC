document.addEventListener('DOMContentLoaded', function () {
    const elementosTexto = [
        { class: 'banco-cnpj', texto: '28.195.667/0001-06' },

        { class: 'banco-nome', texto: 'Banco ABC' },
        { class: 'banco-nome-ALT', texto: 'Banco ABC Brasil' },

        { class: 'banco-nomeCAPS', texto: 'BANCO ABC' },
        { class: 'banco-nomeCAPS-ALT', texto: 'BANCO ABC BRASIL' },

        { class: 'banco-razaosocial', texto: 'Banco ABC S.A.' },
        { class: 'banco-razaosocialCAPS', texto: 'BANCO ABC S.A.' },
        
        { class: 'banco-comprovante', texto: 'BC ABC BRASIL' },
        { class: 'banco-agencia', texto: '0001' },
        { class: 'banco-conta', texto: '2519347-8' },

        { class: 'banco-logradouro', texto: 'Avenida Cidade Jardim' },
        { class: 'banco-numero', texto: '803 (2º andar)' },
        { class: 'banco-bairro', texto: 'Itaim Bibi' },
        { class: 'banco-cidade', texto: 'São Paulo' },
        { class: 'banco-estado', texto: 'São Paulo' },
        { class: 'banco-uf', texto: 'SP' },
        { class: 'banco-cep', texto: '01453-000' },

        { class: 'banco-diretor', texto: 'Alexandre Yoshiaki' },
    ];

    elementosTexto.forEach(item => {
        const elementos = document.querySelectorAll(`.${item.class}`);
        elementos.forEach(el => {
            el.dataset.originalText = el.textContent;
            el.textContent = item.texto;
        });
    });
});