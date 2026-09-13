
export interface Area_centralProps {
    children?: any
}
export default function Area_central(props: Area_centralProps) {
    return (
        <nav className="flex w-full items-center justify-center py-20 bg-zinc-50 font-sans dark:bg-black">
            {props.children}
        </nav>
    );
}