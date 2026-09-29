import CarrosselProfissional from "../../components/template/CarrosselProfissional";


export default function Home() {
  return (

    <div className="justify-items-center-safe  
    text-3xl font-bold 
    text-zinc-900 dark:text-zinc-50
    ">
      <h1 className="text-3xl font-italic gap-2 py-2">
        Por aqui estamos sempre construindo, por isso sempre em mudanças.</h1>
      <h1 className="text-3xl font-bold gap-2 py-2">
        Aqui estão alguns dos meus projetos</h1>
      <CarrosselProfissional />
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold gap-2 py-2">
          Apps Android que desenvolvi para minha Esposa</h1>
      </div>
    </div>


  );
}
