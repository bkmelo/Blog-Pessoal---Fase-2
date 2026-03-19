import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
  return (
    <>

    <div className="bg-[#e1d6d3] flex justify-center">
        <div className="container grid grid-cols-2 text-bg-indigo-900">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
                 <h2 className="text-5xl font-bold">
                 Seja Bem Vindo!</h2>
                 <p className="text-xl">
                    Expresse suas opniões sobre os seus Doramas Preferidos</p>

    <div className="flex justify-around gap-4">
             <ModalPostagem />
             
       </div>
 </div>

 <div className="flex justify-center ">
       <img
             src= "https://ik.imagekit.io/ms3dptda1/30872154_7720852%20(1).jpg"
             alt="Imagem Página Home"
             className="w-2/2"
        />
     </div>
    </div>
  </div>

 <ListaPostagens />

</>
          )
        }
        export default Home






