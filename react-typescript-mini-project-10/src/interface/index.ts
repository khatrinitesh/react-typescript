export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  btnStyle?: React.CSSProperties;
  className?: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

export interface AuroraConfig {
  color1: string;
  color2: string;
  blur: number;
  top: string;
  left: string;
  size: string;
}

export interface SuggestionItem {
  id: number;
  label: string;
}

export interface AvatarItem {
  id: number;
  name: string;
  imageUrl: string;
}

export interface BeamConfig {
  id: number;
  color: string;
  width: number;
  height: number;
  top: string;
  left: string;
  animationDelay: number;
}

export interface BoxConfig {
  id: number;
  size: number;
  top: string;
  left: string;
  color: string;
}

export interface BentoItem {
  id: string;
  title: string;
  description?: string;
  size?: "small" | "medium" | "large";
  bgColor?: string;
  image?: string;
  animation?: "fade" | "slide" | "scale";
}
