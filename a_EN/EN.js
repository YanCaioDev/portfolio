let menu = document.getElementById('menuflag');
let botao = document.getElementById('flagbox');
let icon = document.getElementById('setinha');
const target = document.querySelector('#flagbox');

document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(target);
    const isException = event.target.classList.contains('exception-class');

    if (!isException) {
        if (withinBoundaries) {
            if (menu.classList.contains('absolute')) {
                menu.classList.remove('absolute');
                menu.classList.add('menu-flag');
                menu.classList.remove('menu-flag-reverse');
                botao.classList.add('clicado');
                icon.classList.add('rodar');
                icon.classList.remove('rodar-reverse');
            } else {
                menu.classList.remove('menu-flag');
                menu.classList.add('menu-flag-reverse');
                menu.classList.add('absolute');
                botao.classList.remove('clicado');
                icon.classList.remove('rodar');
                icon.classList.add('rodar-reverse');
            }
        } else {
            if (menu.classList.contains("menu-flag")) {
                icon.classList.remove('rodar');
                icon.classList.add('rodar-reverse');
            }
            menu.classList.remove('menu-flag');
            menu.classList.add('menu-flag-reverse');
            menu.classList.add('absolute');
            botao.classList.remove('clicado');
        }
    }
});

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;
let isHover = false; // Inicialize isHover como falso

// Função para carregar os estilos dos itens
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 0;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    items[active].style.backgroundColor = "hsl(210, 20%, 10%)";
    items[active].style.color = 'hsl(0, 0%, 100%)';
    items[active].style.borderColor = isHover ? "hsl(0, 0%, 100%)" : 'hsl(0, 0%, 37%)';
    // items[active].style.cursor = 'pointer';

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(20px) rotateY(0deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'none';
        items[i].style.opacity = stt > 2 ? 0 : 1;
        items[i].style.backgroundColor = stt > 1 ? " hsl(210, 20%, 3.3%)" : ' hsl(210, 20%, 6.6%)';
        items[i].style.color = stt > 1 ? "hsl(0, 0%, 33%)" : 'hsl(0, 0%, 66%)';
        items[i].style.borderColor = stt > 1 ? "hsl(0, 0%, 12.3%)" : 'hsl(0, 0%, 24.6%)';
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(20px) rotateY(0deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'none';
        items[i].style.opacity = stt > 2 ? 0 : 1;
        items[i].style.backgroundColor = stt > 1 ? " hsl(210, 20%, 3.3%)" : ' hsl(210, 20%, 6.6%)';
        items[i].style.color = stt > 1 ? "hsl(0, 0%, 33%)" : 'hsl(0, 0%, 66%)';
        items[i].style.borderColor = stt > 1 ? "hsl(0, 0%, 12.3%)" : 'hsl(0, 0%, 24.6%)';
    }
}

// Adiciona manipuladores de eventos de mouse para cada item do slider
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        isHover = true;
        loadShow();
    });

    item.addEventListener('mouseleave', () => {
        isHover = false;
        loadShow();
    });
});

// Manipuladores de eventos para os botões next e prev
next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    let timeout;

    // Função para mostrar o cursor
    function showCursor() {
        cursor.style.display = "block";
    }

    // Função para esconder o cursor
    function hideCursor() {
        cursor.style.display = "none";
    }

    // Função que acompanha o movimento do mouse
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
        showCursor();

        // Reseta o timeout para esconder o cursor após 5 segundos de inatividade
        clearTimeout(timeout);
        timeout = setTimeout(hideCursor, 5000);
    });

    // Esconde o cursor quando o mouse sai da janela
    document.addEventListener("mouseleave", hideCursor);

    // Mostra o cursor quando o mouse entra na janela
    document.addEventListener("mouseenter", showCursor);
});
