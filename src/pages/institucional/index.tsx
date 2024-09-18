import { Download } from "lucide-react";
import { Acordeon } from "./Acordeon";

export function Institucional(){

    const text = "<strong>O QUE É A COMSEDER:</strong> \nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium\n totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\nA COMSEDER At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, id est laborum et dolorum fuga.\n\n<strong> Matheus Vinagre</strong>\nDesenvolvedor Do Site"
    const diretoria = "Diretor Presidente \n Lorem lorem lorem\n\nDiretoria Administrativa\nLorem lorem lorem\n\nDiretoria Operacional\nLorem lorem lorem"
    const conselho = "► Lorem lorem lorem (Presidente)\n► Lorem lorem lorem\n► Lorem lorem lorem"
    const admin = "Titulares\n- Lorem lorem lorem (Presidente)\n- Lorem lorem lorem\n- Lorem lorem lorem\n\nSuplentes\n- Lorem lorem lorem\n- Lorem lorem lorem\n- Lorem lorem lorem"


    const RenderText = () => {
        return (
          <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
        );
    };


    return(
        <div className="flex flex-col">    
        <h1 className="text-sky-900 font-bold text-3xl text-center p-12">INSTITUCIONAL</h1>    
        <div className="flex gap-16 flex-wrap px-24 max-mxl:flex-col max-mxl:px-8">
            <div className="flex-1 space-y-8 bg-white px-8 mb-10 rounded-3xl shadow-xl">
                <h2 className="text-sky-900 font-bold text-lg text-center px-12 pt-2">A COMSEDER</h2>
                <p className="px-10 py-4 max-mxl:px-2"><RenderText/></p>
            </div>
            <div className="w-2/6 px-2 mb-10 rounded-lg flex flex-col max-mxl:w-[270px] max-mxl:m-auto">
                <Acordeon
                title="DIRETORIA"
                content={diretoria}
                />
                <Acordeon
                title="CONSELHO ADMINISTRATIVO"
                content={conselho}
                />
                <Acordeon
                title="CONSELHO FISCAL"
                content={admin}
                />
                <div className="flex justify-center items-center p-8">
                    <a href="/assets/MatheusVinagreCurriculum-.pdf">
                        <div className="p-8 w-48 justify-center items-center flex flex-col cursor-pointer border border-transparent font-semibold bg-sky-50 rounded-lg shadow-lg hover:border-sky-600 hover:border hover:text-sky-600">
                            <Download />
                            <h3 className="my-3">ESTATUTO</h3>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
        </div>

    )
}