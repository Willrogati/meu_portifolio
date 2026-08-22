

export default function Logo() {
    return (
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
            <Image
                className="dark:invert"
                src="/logo_name_will.svg"
                alt="Willian Rogati logo"
                width={600}
                height={100}
                priority />
        </div>
    );

}