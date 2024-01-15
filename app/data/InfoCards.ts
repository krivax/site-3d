import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Aumento de vendas",
        bodyText: " A análise preditiva da IA-Create identifica clientes potenciais de alto valor para argumentos de venda direcionados, aumentando as taxas de conversão e as vendas em até 20%.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Sem perda de tempo",
        bodyText: "A IA-Create automatiza a criação de conteúdo personalizado, liberando o tempo dos representantes de vendas para atividades focadas em receitas e aumentando a produtividade.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Churn baixo",
        bodyText: " As ferramentas de engajamento e renovação de leads de IA da IA-Create reduzem a rotatividade de clientes em até 30% por meio de oportunidades consistentes de divulgação e retenção.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards