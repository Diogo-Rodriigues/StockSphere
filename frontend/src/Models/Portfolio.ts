export interface PortfolioGet {
  id: number;
  symbol: string;
  companyName: string;
  purchase: number;
  lastDiv: number;
  industry: string;
  marketCap: number;
  comments: any;
  price?: number;
  change?: number;
}

export type PortfolioPost = {
  symbol: string;
};
