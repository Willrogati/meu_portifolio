import CarrosselProfissional from "../../components/template/CarrosselProfissional";


export default function Home() {
  return (

    <div className="flex justify-items-center">
      <div className="flex place-items-center
      text-3xl
      text-center
      font-italic
      rounded-md
      bg-zinc-50 dark:bg-black
      border border-zinc-300 dark:border-zinc-700
      hover:text-balance
      text-zinc-900 dark:text-white
      gap-5 py-2 px-4">
        Por aqui estamos sempre construindo algo novo, por isso sempre em mudanças.</div>

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
          Aqui estão alguns dos meus projetos</h1>

        <CarrosselProfissional />

        <h1 className="text-3xl font-bold gap-2 py-2">
          App Android que desenvolvi para minha Esposa</h1>
      </div>
    </div>


  );
}
