const swiper = new Swiper('.swiper-container', {  // Alterar para '.swiper-container'
    slidesPerView: 'auto',  // Isso permite que o Swiper determine a largura dos slides automaticamente
    spaceBetween: 20,  // Espaço entre os slides
    loop: true,  // Ativa o loop para os slides
    pagination: {
        el: '.swiper-pagination',  // Paginação
    },
    navigation: {
        nextEl: '.swiper-button-next',  // Botão de navegação "próximo"
        prevEl: '.swiper-button-prev',  // Botão de navegação "anterior"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,  // Exibe 1 slide por vez em telas pequenas
        },
        768: {
            slidesPerView: 2,  // Exibe 2 slides por vez em telas médias
        },
        1024: {
            slidesPerView: 3,  // Exibe 3 slides por vez em telas grandes
        }
    }
});
