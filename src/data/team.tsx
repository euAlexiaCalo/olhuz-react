export interface Member {
    id: number;
    name: string;
    position: string;
    photo: string;
    alt: string;
    github?: string;
    linkedin: string;
}

export const team: Member[] = [
    {
        id: 1,
        name: "Alexia Caló",
        position: "Desenvolvedora Front-end",
        photo: "https://avatars.githubusercontent.com/u/105644441?v=4",
        alt: "Alexia Caló - Desenvolvedora Front-end",
        github: "https://github.com/euAlexiaCalo",
        linkedin: "https://www.linkedin.com/in/al%C3%A9xiacal%C3%B3/"
    },
    {
        id: 2,
        name: "Heitor Guimarães",
        position: "Gerente de Projetos",
        photo: "https://avatars.githubusercontent.com/u/105644444?v=4",
        alt: "Heitor Guimarães - Gerente de Projetos",
        github: "https://github.com/HeitorGuimaraes",     
        linkedin: "https://www.linkedin.com/in/heitor-guimar%C3%A3es/"
    },
    {
        id: 3,
        name: "Luiz Felipe",
        position: "Designer UX/UI",
        photo: "https://avatars.githubusercontent.com/u/105644443?v=4",
        alt: "Luiz Felipe - Designer UX/UI",
        github: "https://github.com/luiz-felipe-ferreira",
        linkedin: "https://www.linkedin.com/in/luiz-felipe-ferreira/"
    },
    {
        id: 4,
        name: "Maria Eduarda",
        position: "Desenvolvedora Back-end",
        photo: "https://avatars.githubusercontent.com/u/105644442?v=4",
        alt: "Maria Eduarda - Desenvolvedora Back-end",
        github: "https://github.com/MariaEduardaFerreira",
        linkedin: "https://www.linkedin.com/in/maria-eduarda-ferreira/"
    },
    {
        id: 5,
        name: "Raí Capinan",
        position: "Desenvolvedor Full-stack",
        photo: "https://avatars.githubusercontent.com/u/105644441?v=4",
        alt: "Raí Capinan - Desenvolvedor Full-stack",
        github: "https://github.com/raicapinan",
        linkedin: "https://www.linkedin.com/in/ra%C3%AD-capinan/"
    },
    {
        id: 6,
        name: "Wagner Campos",
        position: "Desenvolvedora Front-end",
        photo: "https://avatars.githubusercontent.com/u/105644442?v=4",
        alt: "Wagner Campos - Desenvolvedora Front-end",
        linkedin: "https://www.linkedin.com/in/wagner-campos/"
    }
]