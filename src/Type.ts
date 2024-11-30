export type DataType = {
    id: string;
    logo: string;
    name: string;
    description: string;
    source: string;
    link?: string;
    startDate: Date;
    daysLeft: number;
};
export type AmexDataType = {
    name: string;
    category: string;
    status: string;
    id: string;
    source_id: string;
    short_description: string;
    logo_url: string;
    type: string;
    fulfillment_type?: string;
    redemption_types?: string[];
    expiry_date?: string;
    start_date?: string;
    achievement_type?: string;
    dynamic_offer: boolean;
    days_offer_valid?: number;
    cta?: {
        url: string;
    };
};
export type BoaDataType = {
    dealId: string;
    dealDetailId: string;
    dealStatus: string;
    dealedAmount: number;
    isPercentageDeal: boolean;
    daysLeft: string;
    merchantName: string;
    imageURL: string;
    imageText: string;
    smallDescription: string;
    longDescription: string;
    startDate: number;
    endDate: number;
    transactionId: string;
    preMessageImpression?: string;
    postMessageImpression?: string;
    hiddenStatus: boolean;
    category: {
        code: string;
        value: string;
    };
    valueText: string;
    headLineText: string;
    checksum: string;
};
