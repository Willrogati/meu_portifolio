import Area_central from "./Area_central";
import Cabecalho from "./Cabecalho";
import Logo from "./Logo";
import Menu from "./Menu";
import Menu_item from "./Menu_item";
import Titulo_cabecalho from "./Titulo_cabecalho";

export interface PaginaProps {
    children?: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="
        flex flex-col
        min-h-screen
        bg-zinc-50 
        font-sans 
        dark:bg-black">

            <Cabecalho>
                <Titulo_cabecalho />
                <Menu>
                    <Menu_item href="/info/sobre" label="Sobre" />
                    <Menu_item href="/info/contato" label="Contato" />
                    <Menu_item href="/info/projetos_git" label="Projetos no GitHub" />
                </Menu>
            </Cabecalho>


            <div className="flex w-full flex-1 items-center justify-center">
                <Area_central>
                    {props.children}
                </Area_central>
                {/* <main className="p-6 flex flex-col">
                    {props.children}
                </main> */}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Willian Rogati. Todos os direitos reservados.
            </div>
        </div>
    );
}