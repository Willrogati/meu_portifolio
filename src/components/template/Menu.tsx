export interface menuProps {
    children?: any
}

export default function Menu(props: menuProps) {
    return (
        <nav className="flex flex-col 
        items-center
        justify-center
        p-1
        gap-0.5
        bg-zinc-50 
        font-sans
        dark:bg-black">
            {props.children}
        </nav>
    );
}