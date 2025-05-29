export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  label: string;
}

export interface BannerProps {
  headTitle: string;
  description: string;
}

