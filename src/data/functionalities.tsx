import type { IconType } from 'react-icons';
import { LuScanSearch } from "react-icons/lu";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { LuTrendingUp } from "react-icons/lu";
import { LuZap } from "react-icons/lu";
export interface Functionality {
    id: number;
    icon: IconType;
    title: string;
    description: string;
}

export const functionalities: Functionality[] = [
    {
        id: 1,
        icon: LuScanSearch,
        title: 'Reconhecimento de Contexto Avançado',
        description: 'Não apenas identificamos objetos isolados. Nossa IA analisa a relação entre eles para contar a história real da imagem.'
    },
    {
        id: 2,
        icon: MdOutlineFaceRetouchingNatural,
        title: 'Detecção de Emoções e Expressões',
        description: 'Identifique sorrisos, surpresas ou cansaço no rosto das pessoas ao seu redor instantaneamente.'
    },
    
    {
        id: 3,
        icon: LuTrendingUp,
        title: 'Leitura Inteligente de Dados Complexos',
        description: 'Leia cardápios, documentos complexos e faturas com a mesma precisão de quem enxerga cada detalhe.'
    },
    {
        id: 4,
        icon: LuZap,
        title: 'Performance e Velocidade Ultra-rápida',
        description: 'O Olhuz tem um desempenho excepcional, oferecendo uma experiência de leitura fluida e intuitiva.'
    }
]