export interface FaqQuestion {
    id: number;
    question: string;
    answer: string;
}

export const faqQuestions: FaqQuestion[] = [
    {
        id: 1,
        question: 'O Olhuz substitui o meu leitor de telas atual (como NVDA ou JAWS)?',
        answer: 'Não, o Olhuz trabalha em conjunto com eles! Nossa tecnologia foi desenhada para preencher as lacunas que leitores tradicionais possuem, como a interpretação detalhada de imagens, gráficos complexos e interfaces web não acessíveis via IA generativa.'
    },
    {
        id: 2,
        question: 'O aplicativo consome muita internet ou memória do computador?',
        answer: 'Não. Todo o processamento pesado de inteligência artificial é feito na nossa nuvem de alta performance. O aplicativo local é leve e otimizado para não impactar o desempenho do seu sistema operacional.'
    },
    {
        id: 3,
        question: 'Como o Olhuz garante a privacidade das minhas imagens e dados na tela?',
        answer: 'A segurança é nossa prioridade. As imagens enviadas para análise são criptografadas de ponta a ponta e processadas de forma anônima. Não armazenamos o conteúdo visual da sua tela após a geração da descrição textual.'
    }
]