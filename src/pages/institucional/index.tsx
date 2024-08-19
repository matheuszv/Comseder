export function Institucional(){

    const text = "<strong>O QUE É A COMSEDER:</strong> \nCooperativa de Assistência Médica dos Servidores da Suplan e do DER Ltda.\nTrata-se de uma Cooperativa formada, exclusivamente por Servidores Ativos e da Suplan e do DER. Quando aposentados ou deixarem a folha de pagamento, de uma dessas Autarquias, podem continuar vinculados, pagando a parte das Autarquias, o mesmo se aplicando aos seus descendentes.\nFoi fundada na AG – Assembléia Geral do dia 4 de outubro de 1993, com 155 sócios presentes, considerados SÓCIOS FUNDADORES. Foi registrada na JUCEP-PB – Junta Comercial do Estado da Paraíba, no dia 5 de novembro do mesmo ano, data, também, do registro no CNPJ - Cadastro Nacional de Pessoa Jurídica, nº 70.094.578/0001-30 e tornada de Utilidade Pública pela Lei Estadual nº 5.960, de 24 de agosto de 1994. Tem Registro Provisório de Operadora de Plano de Saúde na ANS – Agência Nacional de Saúde Suplementar nº 39.025-9, classificada como Autogestão sem mantenedor. É filiada a UNIDAS – União Nacional das Empresas de Auto Gestão em Saúde.\nA COMSEDER é operadora de plano privado de saúde cuja manutenção é custeada parcialmente pela SUPLAN e DER (patrocinadores), na qualidade de empregadores, representando 20% (vinte por cento) das despesas e o restantes divididos por todos os beneficiários (sócios titulares e dependentes). Eventual resultado negativo, definido como perda, é coberto por meio de rateio entre os participantes cooperados (Lei do Cooperativismo). O mesmo se aplica quando há sobras."

    const RenderText = () => {
        return (
          <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
        );
    };


    return(
        <>    
        <h1 className="text-sky-900 font-bold text-3xl text-center p-12">INSTITUCIONAL</h1>    
        <div className="flex gap-16 flex-wrap px-4">
            <div className="flex-1 space-y-8 bg-white px-8 mb-10 rounded-3xl">
                <h2 className="text-sky-900 font-bold text-lg text-center px-12 pt-2">A COMSEDER</h2>
                <p className="px-10 py-4"><RenderText/></p>
            </div>
            <div className="w-96 space-y-6">Sidebar</div>
        </div>
        </>

    )
}