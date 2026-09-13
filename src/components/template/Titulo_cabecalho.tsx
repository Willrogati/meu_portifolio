import Logo from "./Logo";
import Menu from "./Menu";
import Menu_item from "./Menu_item";

export interface Titulo_cabecalhoProps {
    children?: any
}

export default function Titulo_cabecalho(props: Titulo_cabecalhoProps) {
    return (


        <div
            className="
             
            text-3xl
            font-bold
            text-zinc-900 
            dark:text-white
            bg-white dark:bg-red-900

            ">
            <a href="/">Willian Rogati</a>
        </div>

    );
}