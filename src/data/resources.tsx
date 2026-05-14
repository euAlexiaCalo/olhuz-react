import type { IconType } from 'react-icons';
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
export interface Resource {
    id: number;
    title: string;
    description: string;
    icon: IconType;
}

export const resources: Resource[] = [
    {
        id: 1,
        title: 'Detecção de Emoções',
        description: 'Identifique sorrisos, surpresas ou cansaço no rosto das pessoas ao seu redor instantaneamente.',
        icon: BsEmojiSmile
    },
    {
        id: 2,
        title: 'Análise de Contexto',
        description: 'Entenda a disposição de uma sala, a profundidade de um corredor ou a organização de uma mesa de jantar.',
        icon: HiOutlineSparkles
    },
    {
        id: 3,
        title: 'Leitura Inteligente',
        description: 'Leia cardápios, documentos complexos e faturas com a mesma precisão de quem enxerga cada detalhe.',
        icon: IoDocumentTextOutline
    }
]