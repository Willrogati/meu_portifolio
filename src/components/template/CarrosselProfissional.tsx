import { useState, useEffect, useRef } from 'react';

const IMAGENS = [
    '/imagens/appmeuCiclo_1.png',
    '/imagens/appmeuCiclo_2.png',

];

export default function CarrosselProfissional() {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [estaPausado, setEstaPausado] = useState(false);

    // Referências para rastrear o gesto de arrastar (Swipe) no celular
    const toqueInicioX = useRef(0);
    const toqueFimX = useRef(0);

    // 1. Efeito de Auto-play
    useEffect(() => {
        if (estaPausado) return;

        const intervalo = setInterval(() => {
            irParaProximo();
        }, 4000); // Muda a cada 4 segundos

        return () => clearInterval(intervalo);
    }, [indiceAtual, estaPausado]);

    const irParaAnterior = () => {
        setIndiceAtual((prev) => (prev === 0 ? IMAGENS.length - 1 : prev - 1));
    };

    const irParaProximo = () => {
        setIndiceAtual((prev) => (prev === IMAGENS.length - 1 ? 0 : prev + 1));
    };

    // 2. Funções para detectar o Swipe (Arrastar)
    const aoTocarInicio = (e) => {
        toqueInicioX.current = e.touches[0].clientX;
    };

    const aoTocarMover = (e) => {
        toqueFimX.current = e.touches[0].clientX;
    };

    const aoTocarFim = () => {
        if (!toqueInicioX.current || !toqueFimX.current) return;

        const diferencaX = toqueInicioX.current - toqueFimX.current;
        const sensibilidadeDoDeslize = 50; // pixels mínimos para ativar

        if (diferencaX > sensibilidadeDoDeslize) {
            irParaProximo(); // Arrastou para a esquerda
        } else if (diferencaX < -sensibilidadeDoDeslize) {
            irParaAnterior(); // Arrastou para a direita
        }

        // Reseta os valores
        toqueInicioX.current = 0;
        toqueFimX.current = 0;
    };

    return (
        <div
            className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl group bg-gray-900"
            onMouseEnter={() => setEstaPausado(true)}
            onMouseLeave={() => setEstaPausado(false)}
            onTouchStart={aoTocarInicio}
            onTouchMove={aoTocarMover}
            onTouchEnd={aoTocarFim}
        >
            {/* Container de Imagens (Trilho) */}
            <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
            >
                {IMAGENS.map((url, index) => (
                    <div key={index} className="w-full h-[450px] flex-shrink-0 relative select-none">
                        <img
                            src={url}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                        {/* Gradiente escuro sutil no rodapé para destacar os textos/botões */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                ))}
            </div>

            {/* Botão Anterior (Usando SVG moderno em vez de código de texto) */}
            <button
                onClick={irParaAnterior}
                aria-label="Slide anterior"
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform active:scale-95 border border-white/10"
            >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Botão Próximo */}
            <button
                onClick={irParaProximo}
                aria-label="Próximo slide"
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform active:scale-95 border border-white/10"
            >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Indicadores Premium com Barra de Progresso Visual */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {IMAGENS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setIndiceAtual(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 relative overflow-hidden
              ${indiceAtual === index ? 'w-10 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                    >
                        {/* Pequeno efeito visual de carregamento na barra ativa */}
                        {indiceAtual === index && !estaPausado && (
                            <div className="absolute top-0 left-0 h-full bg-indigo-400 animate-pulse w-full" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
