import Cabecalho from "./Cabecalho";

export interface PaginaProps {
    children: React.ReactNode;
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col flex-1 items-baseline justify-center bg-zinc-50 font-sans dark:bg-black">
            <Cabecalho />
            <div className="flex flex-1">
                <main className="p-6 flex-1">
                    {props.children}
                </main>
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Willian Rogati. Todos os direitos reservados.
            </div>
        </div>
    );
}