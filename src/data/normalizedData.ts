import { AmexDataType, BoaDataType, DataType } from "../Type";

export const normalizeAMEX = (input: AmexDataType[]): DataType[] => {
  console.log("amex");
  return input.map((each) => {
    // if (each.fulfillment_type === undefined) console.log(each);
    return {
      id: each.id,
      logo: each.logo_url,
      name: each.name,
      description: each.short_description,
      source: "AMEX",
      link: each?.cta?.url,
      startDate: new Date(each.start_date ?? 0),
      daysLeft: each.days_offer_valid ?? Infinity,
    };
  });
};
export const normalizeBOA = (input: BoaDataType[]): DataType[] => {
  return input.map((each) => {
    return {
      id: each.dealId,
      logo: each.imageURL,
      name: each.imageText,
      description: each.smallDescription + ` (${each.valueText})`,
      source: "BOA",
      link: undefined,
      startDate: new Date(each.startDate),
      daysLeft: +each.daysLeft,
    };
  });
};
