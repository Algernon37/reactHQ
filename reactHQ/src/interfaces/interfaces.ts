export interface Bot {
    name:string,
    cost:number,
    "24h":number,
    "7d":number,
    "30d":number,
    "60d":number,
    "90d":number,
    "all_time":number
}

export type SelectedButtonProps = "24h" | "7d" | "30d" | "60d" | "90d" | "all_time";

export interface BotComponentProps {
    bot: Bot;
    selectedButton: SelectedButtonProps;
}

export interface ChartComponentProps {
    selectedButton: SelectedButtonProps;
    dataValues: number[];
}

export interface ButtonTimeComponentProps {
    text: string,
    isSelected: boolean, 
    onClick: () => void 
}

export interface TimeRangeProps {
    selectedButton: SelectedButtonProps;
    handleButtonClick: (text: SelectedButtonProps) => void;
}

export interface FooterCellProps {
    title: string,
    img:string
}