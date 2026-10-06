'use client';
import { useState, useEffect, useRef } from 'react';

const IMAGENS = [
    '/imagens/app_meu_ciclo_1.jpg',
    '/imagens/app_meu_ciclo_2.jpg',

];

export default function CarrosselProfissional() {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [estaPausado, setEstaPausado] = useState(true);

    // Referência do container de rolagens para controlar os botões e indicadores
    const containerRef = useRef(null);

    // 1. Efeito de Auto-play baseado em scroll nativo
    // useEffect(() => {
    //     if (estaPausado) return;

    //     const intervalo = setInterval(() => {
    //         const proximoIndice = indiceAtual === IMAGENS.length - 1 ? 0 : indiceAtual + 1;
    //         moverParaSlide(proximoIndice);
    //     }, 4000);

    //     return () => clearInterval(intervalo);
    // }, [indiceAtual, estaPausado]);

    // Função central responsável por mover o carrossel de forma suave
    const moverParaSlide = (index) => {
        setIndiceAtual(index);
        if (containerRef.current) {
            const container = containerRef.current;
            const itensDoContainer = container.children;

            if (itensDoContainer[index]) {
                // Alinha o slide selecionado exatamente ao centro do carrossel
                itensDoContainer[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    };

    const irParaAnterior = () => {
        const novoIndice = indiceAtual === 0 ? IMAGENS.length - 1 : indiceAtual - 1;
        moverParaSlide(novoIndice);
    };

    const irParaProximo = () => {
        const novoIndice = indiceAtual === IMAGENS.length - 1 ? 0 : indiceAtual + 1;
        moverParaSlide(novoIndice);
    };

    // Atualiza as bolinhas indicadoras caso o usuário arraste com o dedo no celular
    const aoMudarScrollManual = () => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const scrollEsquerda = container.scrollLeft;
        const larguraTotalItem = container.scrollWidth / IMAGENS.length;

        // Calcula qual o slide mais próximo baseado na posição do scroll
        const indexDetectado = Math.round(scrollEsquerda / larguraTotalItem);
        if (indexDetectado !== indiceAtual && indexDetectado >= 0 && indexDetectado < IMAGENS.length) {
            setIndiceAtual(indexDetectado);
        }
    };

    return (
        <div
            className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl group bg-gray-900"
            onMouseEnter={() => setEstaPausado(true)}
            onMouseLeave={() => setEstaPausado(false)}
        >
            {/* Container de Imagens (Trilho com scroll e snap nativo) */}
            <div
                ref={containerRef}
                onScroll={aoMudarScrollManual}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none items-center py-8 scroll-smooth"
            >
                {IMAGENS.map((url, index) => (
                    <div
                        key={index}
                        className="w-[280px] sm:w-[320px] aspect-[9/16] shrink-0 snap-center relative select-none rounded-2xl overflow-hidden mx-8 shadow-2xl transition-transform duration-300"
                    >

                        <img
                            src={url}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                ))}
            </div>

            {/* Botão Anterior */}
            <button
                onClick={irParaAnterior}
                aria-label="Slide anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform active:scale-95 border border-white/10 z-10"
            >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Botão Próximo */}
            <button
                onClick={irParaProximo}
                aria-label="Próximo slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform active:scale-95 border border-white/10 z-10"
            >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Barra de Progresso */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {IMAGENS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => moverParaSlide(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 relative overflow-hidden
                            ${indiceAtual === index ? 'w-10 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                    >
                        {indiceAtual === index && !estaPausado && (
                            <div className="absolute top-0 left-0 h-full bg-indigo-400 animate-pulse w-full" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
