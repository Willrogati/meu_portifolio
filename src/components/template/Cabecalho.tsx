interface CabecalhoProps {
    children?: React.ReactNode;
}

export default function Cabecalho(props: CabecalhoProps) {
    return (

        <header
            className="
            flex
            justify-between
            py-2 px-2
            bg-white dark:bg-black
            
            "
        >
            {props.children}
        </header>

    );
}   