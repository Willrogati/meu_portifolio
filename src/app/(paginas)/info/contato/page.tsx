"use client";
export default function contato() {
    return (
        <div className="flex flex-col 
        items-center 
        justify-center
        text-xl
        gap-4
        ">
            <h1 className="text-3xl font-bold">Contato</h1>
            <p>Email:
                <a href="mailto:rogati.dev@gmail.com"
                    className="rounded-md 
                bg-zinc-50 dark:bg-black
                border border-zinc-300 dark:border-zinc-700
                text-xl
                font-xl
                text-blue-500
                px-2
                py-1
                dark:hover:bg-zinc-900
                hover:underline">
                    rogati.dev@gmail.com
                </a>
            </p>
            <p>LinkedIn:
                <a href="https://www.linkedin.com/in/willian-rogati-44aa1a43"
                    className="
                rounded-md 
                bg-zinc-50 dark:bg-black
                border border-zinc-300 dark:border-zinc-700
                text-xl
                font-xl
                text-blue-500
                px-2
                py-1
                gap-2
                dark:hover:bg-zinc-900
                hover:underline" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/willian-rogati
                </a>
            </p>

        </div>
    );
}