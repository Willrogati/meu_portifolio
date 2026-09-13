"use client";
export default function contato() {
    return (
        <div className="flex flex-col 
        items-center 
        justify-center
        text-xl
        gap-4
        ">
            <h1>Contato</h1>
            <p>Email:
                <a href="mailto:rogati.dev@gmail.com" className="text-blue-500 hover:underline">
                    rogati.dev@gmail.com
                </a>
            </p>
            <p>LinkedIn:
                <a href="https://www.linkedin.com/in/willian-rogati-44aa1a43" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/willian-rogati
                </a>
            </p>

        </div>
    );
}