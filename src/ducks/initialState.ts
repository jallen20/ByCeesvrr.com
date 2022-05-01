export type Photo = {
  fileName: string
};

export type PortfolioState = {
  photos: Photo[],
  isNavOpen: boolean
};

export const portfolioInitialState: PortfolioState = {
  photos: [] as Photo[],
  isNavOpen: false
};
