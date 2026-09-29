import CarrosselProfissional from "../../../../components/template/CarrosselProfissional";

export default function projetos_git() {
    return (
        <div className=" justify-items-center-safe ">
            <h1>Projetos no GitHub</h1>
            <button className=" flex justify-center-safe
            bg-blue-500 
            hover:bg-blue-700 
            text-white 
            font-bold 
            py-2 px-4
            rounded
            ">
                <a href="https://github.com/Willrogati" target="_blank" rel="noopener noreferrer">github.com/Willrogati</a>
            </button>
            <CarrosselProfissional />

        </div>
    );
}