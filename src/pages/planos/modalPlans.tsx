import { X } from "lucide-react"

interface ModalPlan{
    handleModal: () => void;
}

export function ModalPlan({handleModal}:ModalPlan){
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center shadow-shape z-20">
          <div className="w-[840px] rounded-xl bg-sky-100 py-5 px-8 flex flex-col gap-3 text-zinc-800">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">Nome do Plano</h2>
                <X onClick={handleModal} className="cursor-pointer"/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint rem consequuntur natus, omnis nihil nemo aut voluptatem architecto? Ullam ex soluta consequatur obcaecati sed iure fugit aut, omnis nisi?
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
          </div>
        </div>
    )
}