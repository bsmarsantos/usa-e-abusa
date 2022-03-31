var $modalMascara = $('#modalMascara');

$(document).ready(function(){
    var owlMain = $('.owl-main, .owl-trasmicao');

    /* Start Plugins */ 
    owlMain.owlCarousel({ // https://owlcarousel2.github.io/OwlCarousel2/
        loop: true,
        margin: 10,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        items: 1,
        responsiveClass: true
    });

    // Listeners
    owlMain.on('changed.owl.carousel', (e) => {        
        switch (e.page.index) {
            case 0: // COVID
                $('#owl-btn').attr('href', '#sectionInicio');
                break;
            case 1: // EPI
                $('#owl-btn').attr('href', '#sectionEPI');
                break;
            case 2: // Recomendações
                $('#owl-btn').attr('href', 'https://covid19.min-saude.pt');
                break;
            case 3: // O Movimento
                $('#owl-btn').attr('href', '#sectionMovimento');
                break;
            default:
                $('#owl-btn').attr('href', '#sectionInicio');
                break;
        }        
    });

    /* Popper plugin + bootstrap */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    /* Fim Popper plugin + bootstrap */

    $('.nav-item').on('click', function (e) {
        if ($('#navbarCollapsed').hasClass('show')) {
            $('#collapseMenu').trigger('click');
        }
    })
});

$('#modalVideo').on('hide.bs.modal', function (e) {
    let $iframe = $('#iVideo');

    if( $iframe ) {
        let iframeSrc = $iframe.attr('src');
        $iframe.attr('src', iframeSrc);     
    }
});

function changeText(e) {
    // Remove cor do botão atual e esconde o texto atual
    $(`#${ $('.virus-1').attr('data-text') }`).addClass('d-none');
    $('.virus-1').addClass('virus-2').removeClass('virus-1');

    // Adicona Cor ao botão clicado e mostra o texto
    $(e).addClass('virus-1').removeClass('virus-2');
    $(`#${ $(e).attr('data-text') }`).removeClass('d-none');    
}

function handleSintoma(e) {
    $('.inside-round').removeClass('active');
    $(e).addClass('active');

    let text = $(e).children().attr('alt');    
    $('#sintoma-text').html(text);
}

/* NAVBAR */
function changeNavBGRadius (e) {    
    if (!$(e).hasClass('collapsed')) {
        $('nav .container-fluid').first().css('border-radius', '2rem');
    } else {
        $('nav .container-fluid').first().css('border-radius', '20rem');
    }
}
/* FIM NAVBAR */

/* MODAL */
function changeMascaraContent(e, content) {
    /* Troca o botão ativo */
    $('.mascara.active').removeClass('active');
    $(e).addClass('active');

    /* Troca titulo */
    $('.mascaraTitle:not(.d-none)').addClass('d-none');
    $(`#mascaraTitle${content}`).removeClass('d-none');

    $('.mascara-content:not(.d-none)').addClass('d-none');
    $('.mascara-content').filter(`[data-content="${content}"]`).removeClass('d-none');   
}
/* FIM MODAL */