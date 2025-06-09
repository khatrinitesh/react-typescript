export interface Tag  {
  id: number;
  name: string;
  category: string;
};

export interface PreloaderState{
  isLoading:boolean;
  setLoading:(value:boolean) => void;
}

export interface TeamMember{
  id:number;
  name:string;
  role:string;
  bio:string;
  image:string;
}

export interface TeamState {
  selectedMember: TeamMember | null;
  selectMember: (member: TeamMember) => void;
  clearSelection: () => void;
}
