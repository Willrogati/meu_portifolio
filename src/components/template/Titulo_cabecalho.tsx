import Logo from "./Logo";
import Menu from "./Menu";
import Menu_item from "./Menu_item";

export interface Titulo_cabecalhoProps {
    children?: any
}

export default function Titulo_cabecalho(props: Titulo_cabecalhoProps) {
    return (


        <div
            className="flex
            items-center
            justify-center 
            text-3xl
            font-bold
            text-zinc-900 
            dark:text-white
            bg-white dark:bg-black
            hover:text-zinc-600 dark:hover:text-zinc-400

            ">
            <a href="/">Willian Rogati</a>
        </div>

    );
}