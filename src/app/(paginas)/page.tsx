
import CarrosselProfissional from "../../components/template/CarrosselProfissional";
import DynamicTypingHover from '../../components/template/DynamicTypingHover';


export default function Home() {
  return (

    <div className="flex flex-col items-center gap-2 py-2 px-4 text-center">

      <div className=" flex flex-col items-center 
      gap-2
      py-10 px-4
      text-3xl
      font-italic
      rounded-md
      bg-zinc-50 dark:bg-black
      border border-zinc-300 dark:border-zinc-700
      text-zinc-900 dark:text-white
      ">
        <div className="flex text-center gap-2 py-2 px-1 items-center">
          <DynamicTypingHover text="Por aqui estamos sempre construindo algo novo." />
          <p className="text-zinc-900 dark:text-white">
            Utilizando API do Gemini, criei um quiz com IA que gera partir de um Tópico perguntas e
            respostas de forma dinâmica, tornando o quiz mais interativo.
          </p>
        </div>

        <div className="flex 
        gap-2 py-2 px-1 
        justify-center 
        items-center
        width-100%
        
        ">
          <img
            src="/imagens/quiz-ia-edit.gif"
            alt="Imagem de um quiz com IA"
            className="w-160 h-90 rounded-4xl gap-4 py-2 px-4"
          />
        </div>
      </div>

      <div className="flex flex-col 
      justify-center
      px-10
      py-5
      gap-6
      text-center
      text-zinc-900
      dark:bg-zinc-950
      dark:text-white
      ">
        <h1 className="text-3xl font-bold gap-2 py-2">
          App Android que desenvolvi para minha Esposa</h1>

        <CarrosselProfissional />

      </div>
    </div>


  );
}
