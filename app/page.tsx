import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs 
        text-3xl 
        font-semibold 
        leading-20
        tracking-tight
       text-black 
        dark:text-zinc-50">
          Olá, meu nome é
        </h1>
        <Image
          className="dark:invert"
          src="/logo_name_will.svg"
          alt="Willian Rogati logo"
          width={600}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-20  text-black dark:text-zinc-50">
            Este é meu portifólio...
          </h1>
          <p className="max-w-md text-lg leading-8   text-zinc-600 dark:text-zinc-400">
            Aqui estão alguns projetos executados por mim utilizando Ferramentas, linguagens e Frameworks como HTML, CSS e Tailwind CSS, React, Next.js e TypeScript. Você pode acessar o repositório do{" "}
            <a
              href="https://github.com/Willrogati"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              GitHub
            </a>{" "}
            ou entrar em contato através do meu{" "}
            <a
              href="https://www.linkedin.com/in/willian-rogati-44aa1a43"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              LinkedIn
            </a>{" "}
            caso tenha interesse.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/Willrogati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="none"
              src="/github.svg"
              alt="GitHub logomark"
              width={16}
              height={16}
            />
            GitHub
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://www.linkedin.com/in/willian-rogati-44aa1a43"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="none"
              src="/linkedinlogo.svg"
              alt="LinkedIn logomark"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
          <h2 className="text-sm text-zinc-600 dark:text-zinc-400">
            email:{" "}
            <a
              href="mailto:rogati.dev@gmail.com"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              rogati.dev@gmail.com
            </a>
          </h2>
          <footer className="text-sm text-zinc-600 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Willian Rogati. Todos os direitos reservados.
          </footer>
        </div>
      </main>
    </div>
  );
}
