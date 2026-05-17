import type { IconType } from "react-icons";
import { LuMonitorSmartphone } from "react-icons/lu";
import { TbSettingsSpark } from "react-icons/tb";
import { FiShield } from "react-icons/fi";
import { SlCreditCard } from "react-icons/sl";

export interface FaqCategory {
    id: number;
    icon: IconType;
    title: string;
    description: string;
}

export const faqCategories: FaqCategory[] = [
    {
        id: 1,
        icon: LuMonitorSmartphone,
        title: 'Primeiros Passos',
        description: 'Instalação e configuração inicial do Olhuz.'
    },
    {
        id: 2,
        icon: TbSettingsSpark,
        title: 'Funcionalidades e IA',
        description: 'Como usar os recursos avançados de IA.'
    },
    {
        id: 3,
        icon: FiShield,
        title: 'Privacidade e Segurança',
        description: 'Como protegemos seus dados e imagens.'
    },
    {
        id: 4,
        icon: SlCreditCard,
        title: 'Planos e Conta',
        description: 'Gerencie sua assinatura e preferências.'
    }
]