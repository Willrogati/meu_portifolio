export interface menuProps {
    children?: any
}

export default function Menu(props: menuProps) {
    return (
        <nav className="flex flex-col 
        items-stretch 
        p-1
        gap-0.5
        bg-zinc-50 
        font-sans
        border-rounded
        border-2
        border-mauve-500
        dark:bg-black">
            {props.children}
        </nav>
    );
}