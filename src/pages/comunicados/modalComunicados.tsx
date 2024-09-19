import { X, Clock } from "lucide-react"

interface ModalComunicados{
    handleModal: () => void;
}

export function ModalComunicados({handleModal}:ModalComunicados){
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center shadow-shape z-20">
          <div className="w-[840px] rounded-xl bg-sky-100 py-5 px-8 flex flex-col gap-3 text-zinc-800 max-mxl:w-[360px]">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Título do Comunicado</h2>
                <X onClick={handleModal} className="cursor-pointer"/>
            </div>
            <p className="max-mxl:text-sm overflow-y-scroll h-[450px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint rem consequuntur natus, omnis nihil nemo aut voluptatem architecto? Ullam ex soluta consequatur obcaecati sed iure fugit aut, omnis nisi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed. Doloremque praesentium natus vero facilis eligendi recusandae, reiciendis, voluptas architecto voluptatum omnis, ut velit ad modi nisi officia assumenda ullam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed architecto tenetur perferendis, eveniet deserunt iusto! Molestiae, tenetur unde necessitatibus ipsa accusamus consequatur aliquid exercitationem quis velit labore odit ea.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut quasi atque eum dignissimos! Quibusdam iure sequi doloremque maiores, reprehenderit voluptas accusamus nostrum ducimus cupiditate quasi id? Cum, magni ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint rem consequuntur natus, omnis nihil nemo aut voluptatem architecto? Ullam ex soluta consequatur obcaecati sed iure fugit aut, omnis nisi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed. Doloremque praesentium natus vero facilis eligendi recusandae, reiciendis, voluptas architecto voluptatum omnis, ut velit ad modi nisi officia assumenda ullam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed architecto tenetur perferendis, eveniet deserunt iusto! Molestiae, tenetur unde necessitatibus ipsa accusamus consequatur aliquid exercitationem quis velit labore odit ea.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut quasi atque eum dignissimos! Quibusdam iure sequi doloremque maiores, reprehenderit voluptas accusamus nostrum ducimus cupiditate quasi id? Cum, magni ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint rem consequuntur natus, omnis nihil nemo aut voluptatem architecto? Ullam ex soluta consequatur obcaecati sed iure fugit aut, omnis nisi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed. Doloremque praesentium natus vero facilis eligendi recusandae, reiciendis, voluptas architecto voluptatum omnis, ut velit ad modi nisi officia assumenda ullam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed architecto tenetur perferendis, eveniet deserunt iusto! Molestiae, tenetur unde necessitatibus ipsa accusamus consequatur aliquid exercitationem quis velit labore odit ea.
            </p>           
            <span className="justify-center pt-3 items-center gap-2 text-sky-600 flex border-t border-sky-600">
                <Clock size={16}/>
                0 de janeiro de 2024
            </span> 
          </div>
        </div>
    )
}