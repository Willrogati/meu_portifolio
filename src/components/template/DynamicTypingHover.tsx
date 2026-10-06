'use client';
import React from 'react';
import './DynamicTypingHover.css';

type DynamicTypingStyle = React.CSSProperties & {
    '--text-length': number;
    '--typing-duration': string;
};

export default function DynamicTypingHover({ text = "Texto Padrão" }) {
    // Conta a quantidade total de caracteres (incluindo espaços)
    const length = text.length;
    const style: DynamicTypingStyle = {
        "--text-length": length,
        '--typing-duration': `${length * 0.08}s`
    };

    return (
        <div className="container">
            <h1
                className="dynamic-typing"
                style={style}
            >
                {text}
            </h1>
        </div>
    );
}