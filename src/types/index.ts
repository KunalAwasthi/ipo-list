export type TimelineTick = {
  event: string;
  eventDate: string;
  completed: boolean;
}

export type Status = 'active' | 'completed' | 'upcoming';


export type IpoListItem = {
  slug: string;
  companyName: string;
  legalName: string;
  status: Status;
  aboutCompany: string;
  thumbnail: string;
  ipoDocumentLink: string;
  startDate: string;
  endDate: string;
  issueSizeInCr: number;
  priceRange: {
    min: number;
    max: number;
  };
  investmentConstraints: {
    minShares: number;
    numOfLots: number;
  };
  listingInfo?: {
    listedDate: string;
    listedPrice: number;
    listingGains: number;
    listingGainsPercentage: number;
  };
  timeline?: TimelineTick[];
}
