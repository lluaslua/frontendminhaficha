

export const mockPlayerData = [
    {
    id: 1,
    name: "Thorgar",
    playerClass: "Druida",
    level: 4,
    playerRace: "Firbolg",
    strength: 14,
    dexterity: 19,
    constitution: 18,
    intelligence: 8,
    wisdom: 20,
    charisma: 15,
    armor: 15,
    initiative: 4,
    speed: 9,
    proficiencyBonus: 2,
    currentLife: 35,
    maxLife: 35,
    passiveWisdom: 16,
    success: 0,
    fail: 0,
    platinumPieces: 3,
    goldPieces: 210,
    electrumPieces: 0,
    silverPieces: 0,
    copperPieces: 0,
    equipments: [
        {
                id: 1,
                name: "Bastão",
                typeOfDamage: "BLUDGEONING",
                hitBonus: 4, // Força (+2) + Proficiência (+2)
                damage: "1d6", // Bastão normalmente é 1d6 (ou 1d8 versátil)
            },
            {
                id: 2,
                name: "Machadinha",
                typeOfDamage: "SLASHING",
                hitBonus: 4, 
                damage: "1d6",
            },
            {
                id: 3,
                name: "Escudo de Madeira",
                typeOfDamage: "NONE",
                hitBonus: 0,
                damage: "0",
                description: "+2 na Classe de Armadura (CA)"
            },
            {
                id: 4,
                name: "Armadura de Couro Batido",
                typeOfDamage: "NONE",
                hitBonus: 0,
                damage: "0",
                description: "CA base 12 + Modificador de Destreza"
            }
    ],
    languages: [
            { id: 1, name: "Comum" },
            { id: 2, name: "Élfico" },
            { id: 3, name: "Gigante" },
            { id: 4, name: "Druídico" }
    ],
    spells: [
            {
                id: 1,
                level: 0,
                name: "Selvageria Primordial",
                type: "TRANSMUTATION",
                castingTime: "1 ACTION",
                range: "SELF",
                components: "S",
                duration: "INSTANTANEOUS",
                description: "Você canaliza magia primitiva para fazer com que seus dentes ou unhas fiquem afiados... Em um acerto, o alvo recebe 1d10 de dano ácido."
            },
            {
                id: 2,
                level: 1,
                name: "Enredar",
                type: "CONJURATION",
                castingTime: "1 ACTION",
                range: "27 METERS",
                components: "V, S",
                duration: "CONCENTRATION, UP TO 1 MINUTE",
                description: "Plantas e raízes rastejantes brotam do solo em um quadrado de 6 metros... Criaturas na área devem passar em resistência de Força ou ficarão impedidas."
            },
            {
                id: 3,
                level: 1,
                name: "Curar Ferimentos",
                type: "EVOCATION",
                castingTime: "1 ACTION",
                range: "TOUCH",
                components: "V, S",
                duration: "INSTANTANEOUS",
                description: "Uma criatura que você tocar recupera pontos de vida iguais a 1d8 + seu modificador de habilidade de conjuração (+5)."
            },
            {
                id: 4,
                level: 2,
                name: "Passo Sem Pegadas",
                type: "ABJURATION",
                castingTime: "1 ACTION",
                range: "SELF",
                components: "V, S, M",
                duration: "CONCENTRATION, UP TO 1 HOUR",
                description: "Um véu de sombras e silêncio irradia de você. Você e criaturas escolhidas ganham +10 em testes de Furtividade."
            }
        ],
    traits: [
        {
            id: 1,
            name: "Estrutura robusta",
            description: "Você conta como um tamanho maior ao determinar sua capacidade de carga e o peso que pode empurrar, arrastar ou levantar."

        },
        {
            id: 2,
            name: "Fala da Fera e da Folha",
            description: "Você tem a habilidade de se comunicar de forma limitada com Feras, Plantas e vegetação. Elas podem entender o significado das suas palavras, embora você não tenha nenhuma habilidade especial para entendê-las. Você tem vantagem em todos os testes de Carisma que fizer para influenciá-las."
        },
        {
            id: 3,
            name: "Passo Oculto",
            description: "Como uma ação bônus, você pode magicamente ficar invisível até o início do seu próximo turno ou até atacar, fazer uma jogada de dano ou forçar alguém a fazer um teste de resistência. Depois de usar esta característica, você não poderá usá-la novamente até terminar um descanso curto ou longo."
        }
    ],
    features: [
            {
                id: 1,
                name: "Forma Selvagem",
                description: "Você pode usar sua ação para assumir magicamente a forma de uma fera que você já tenha visto antes. Você pode usar esta característica duas vezes por descanso curto ou longo."
            },
            {
                id: 2,
                name: "Forma Selvagem de Combate (Círculo da Lua)",
                description: "Você ganha a habilidade de usar Forma Selvagem no seu turno como uma ação bônus, em vez de uma ação normal. Você também pode gastar espaços de magia para curar sua forma de fera."
            },
            {
                id: 3,
                name: "Formas de Círculo (Círculo da Lua)",
                description: "Você pode se transformar em bestas com Nível de Desafio (ND) tão alto quanto 1 (como um Urso Marrom ou Lobo Atroz). O ND máximo aumenta no nível 6."
            }
        ],
    skills: [
            { id: 1, name: "Acrobacia (Des)", bonus: 4, isProeficient: false }, 
            { id: 2, name: "Arcanismo (Int)", bonus: -1, isProeficient: false }, 
            { id: 3, name: "Atletismo (For)", bonus: 2, isProeficient: false }, 
            { id: 4, name: "Atuação (Car)", bonus: 2, isProeficient: false }, 
            { id: 5, name: "Enganação (Car)", bonus: 2, isProeficient: false }, 
            { id: 6, name: "Furtividade (Des)", bonus: 4, isProeficient: false },
            { id: 7, name: "História (Int)", bonus: -1, isProeficient: false }, 
            { id: 8, name: "Intimidação (Car)", bonus: 2, isProeficient: false }, 
            { id: 9, name: "Intuição (Sab)", bonus: 7, isProeficient: true }, 
            { id: 10, name: "Investigação (Int)", bonus: -1, isProeficient: false }, 
            { id: 11, name: "Lidar com Animais (Sab)", bonus: 7, isProeficient: true }, 
            { id: 12, name: "Medicina (Sab)", bonus: 5, isProeficient: false }, 
            { id: 13, name: "Natureza (Int)", bonus: 1, isProeficient: true },
            { id: 14, name: "Percepção (Sab)", bonus: 7, isProeficient: true }, 
            { id: 15, name: "Persuasão (Car)", bonus: 2, isProeficient: false }, 
            { id: 16, name: "Prestidigitação (Des)", bonus: 4, isProeficient: false }, 
            { id: 17, name: "Religião (Int)", bonus: -1, isProeficient: false }, 
            { id: 18, name: "Sobrevivência (Sab)", bonus: 7, isProeficient: true }, 
        ],
    }

   
]