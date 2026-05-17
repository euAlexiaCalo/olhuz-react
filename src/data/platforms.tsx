import type { IconType } from "react-icons";
import { PiPuzzlePieceLight } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineDesktop } from "react-icons/ai";

export interface Platform {
    id: number;
    icon: IconType;
    title: string;
    subtitle: string;
}

export const platforms: Platform[] = [
    {
    id: 1,
    icon: PiPuzzlePieceLight,
    title: 'Extensão',
    subtitle: 'Chrome, Edge e Firefox',
  },
  {
    id: 2,
    icon: IoIosPhonePortrait,
    title: 'App Mobile',
    subtitle: 'iOS e Android',
  },
  {
    id: 3,
    icon: AiOutlineDesktop,
    title: 'Integração Desktop',
    subtitle: 'Windows e Mac',
  }
]