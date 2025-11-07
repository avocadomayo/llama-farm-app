import {
  AddressAutocompleteSuggestion,
  extension,
} from "@shopify/ui-extensions/checkout";

export default extension(
  "purchase.address-autocomplete.suggest",
  async ({ target }) => {
    const { field, value, selectedCountryCode } = target;
    console.log({ field, value, selectedCountryCode });

    function mapSuggestioon(suggestion: any): AddressAutocompleteSuggestion {
      return {
        id: suggestion.id,
        label: suggestion.label,
        matchedSubstrings: suggestion.matchedSubstrings,
        formattedAddress: {
          address1: suggestion.address1,
          address2: suggestion.address2,
          city: suggestion.city,
          zip: suggestion.zip,
          provinceCode: suggestion.provinceCode,
          countryCode: suggestion.countryCode,
        },
      };
    }

    const germanySuggestion = mapSuggestioon({
      id: "1",
      label: "Test Germany autocomplete suggestion",
      matchedSubstrings: [
        {
          offset: 0,
          length: 12,
        },
      ],
      address1: "Berliner Straße ⁠30",
      address2: "Apt 1",
      city: "Herford",
      zip: "32052",
      provinceCode: "NRW",
      countryCode: "DE",
    });

    const canadaSuggestion = mapSuggestioon({
      id: "2",
      label: "Test Canada autocomplete suggestion",
      matchedSubstrings: [
        {
          offset: 0,
          length: 12,
        },
      ],
      address1: "620 King Street West",
      city: "Toronto",
      zip: "L9T 3L9",
      provinceCode: "ON",
      countryCode: "CA",
    });

    if (selectedCountryCode === "DE") {
      return {
        suggestions: [germanySuggestion],
      };
    }

    if (selectedCountryCode === "CA") {
      return {
        suggestions: [canadaSuggestion],
      };
    }

    return {
      suggestions: [],
    };
  }
);
