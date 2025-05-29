export interface HeadTitleProps{
    children:React.ReactNode;
    headTitleStyle?:React.CSSProperties;
}

export interface CardData {
  id: number;
  image: string;
  title: string;
}

export interface CardBoxProps {
  card: CardData;
}
