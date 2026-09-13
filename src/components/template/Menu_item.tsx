import Link from "next/link";

export interface Menu_itemProps {
    href: string;
    label: string;
    children?: any;
}

export default function Menu_item(props: Menu_itemProps) {
    return (
        <Link href={props.href} className="
        text-center
        text-zinc-600 
        hover:text-zinc-900 
        dark:text-zinc-400 
        dark:hover:text-zinc-100
        rounded-md
        px-2 py-1,5
        
        text-sm font-medium
        transition-colors duration-200
        border-solid
        border-2 border-zinc-600
        hover:border-zinc-900
        dark:border-zinc-400
        dark:hover:border-zinc-100
        ">
            {props.label}
        </Link>
    );
}