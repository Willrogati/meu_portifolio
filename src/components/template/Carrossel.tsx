import { useState } from 'react';

const IMAGENS = [
    'https://unsplash.com',
    'https://unsplash.com',
    'https://unsplash.com',
];

export default function Carrossel() {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const irParaAnterior = () => {
        setIndiceAtual((prev) => (prev === 0 ? IMAGENS.length - 1 : prev - 1));
    };

    const irParaProximo = () => {
        setIndiceAtual((prev) => (prev === IMAGENS.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-xl group">
            {/* Container de Imagens (Efeito Deslizante) */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
            >
                {IMAGENS.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-96 object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Botão Anterior */}
            <button
                onClick={irParaAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                &#10094;
            </button>

            {/* Botão Próximo */}
            <button
                onClick={irParaProximo}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                &#10095;
            </button>

            {/* Indicadores (Bolinhas) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {IMAGENS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setIndiceAtual(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 
              ${indiceAtual === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}