interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 49,
        title: "IA-Create Pro",
        benefits: [
            "Pontuação preditiva de leads",
            "Criação automatizada de conteúdo",
            "Mensagens personalizadas em grande escala",
            "Ferramentas de retenção de clientes",
        ],
        id: 1,
        oneliner: "Ferramentas de vendas baseadas em IA para crescimento de receita focado"
    },
    {
        price: 99,
        title: "IA-Create Enterprise",
        benefits: [
            "Tudo no nível Pro e:",
            "Recomendações baseadas em dados",
            "Fluxos de trabalho de vendas personalizáveis",
            "Alertas e notificações em tempo real",
        ],
        id: 2,
        oneliner: "Otimização abrangente de vendas para ganhos acelerados de receita"
    },
]

export default pricingCards