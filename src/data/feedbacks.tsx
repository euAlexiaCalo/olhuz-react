export interface Feedback {
    id: number;
    text: string;
    name: string;
    photo: string;
    alt: string;
}

export const feedbacks: Feedback[] = [
    {
        id: 1,
        text: "O Olhuz não me diz apenas que há um prato na mesa. Ele me diz que é a lasanha da minha mãe, fumegando e com aquela crosta de queijo que eu adoro. É emocionante.",
        name: "Mariana Silva",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        alt: "Foto de Mariana Silva"
    },
    {
        id: 2,
        text: "Antes do Olhuz, eu evitava sair para jantar. Agora, posso escolher qualquer restaurante e me sentir confiante para explorar o cardápio e o ambiente. É uma liberdade que eu nunca imaginei ter.",
        name: "Carlos Eduardo",
        photo: "https://randomuser.me/api/portraits/men/44.jpg",
        alt: "Foto de Carlos Eduardo"
    },
    {
        id: 3,
        text: "Pela primeira vez em anos, consegui escolher minhas próprias roupas sem ajuda. A IA descreve as cores e texturas com uma precisão que me deu uma liberdade incrível.",
        name: "Ricardo Gomes",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",        
        alt: "Foto de Ricardo Gomes"
    }
]