import {CountryLookupMethodType} from './countryLookupMethodType';
import {CountryNamedLocation} from './countryNamedLocation';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCountryNamedLocation(countryNamedLocation: CountryNamedLocation | undefined = {} as CountryNamedLocation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoNamedLocation(countryNamedLocation),
        "countriesAndRegions": n => { countryNamedLocation.countriesAndRegions = n.getCollectionOfPrimitiveValues<string>(); },
        "countryLookupMethod": n => { countryNamedLocation.countryLookupMethod = n.getEnumValue<CountryLookupMethodType>(CountryLookupMethodType); },
        "includeUnknownCountriesAndRegions": n => { countryNamedLocation.includeUnknownCountriesAndRegions = n.getBooleanValue(); },
    }
}
