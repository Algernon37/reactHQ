export interface Bot {
    name:string,
    cost:number,
    "24h":number,
    "7d":number,
    "30d":number,
    "60d":number,
    "90d":number,
    all_time:number
}

export interface BotComponentProps {
    bot: Bot;
}

export interface ButtonTimeComponentProps {
    text: string,
    isSelected: boolean, 
    onClick: () => void 
}
