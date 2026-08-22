interface CabecalhoProps {
    children: React.ReactNode;
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div className="flex flex-col flex-1 items-baseline justify-center bg-zinc-50 font-sans dark:bg-black">
            <header className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                {props.children}
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
                    Willian Rogati
                </h1>
            </header>
        </div>
    );
}   