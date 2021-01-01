export interface BienModel{
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;
  state: number;
  category: string;
  sale: boolean;
  createdAt: Date;
  archive?: boolean;
}
