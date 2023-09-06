import { CountryLookupMethodType } from './countryLookupMethodType';
import { type CountryNamedLocation } from './countryNamedLocation';
import { serializeNamedLocation } from './serializeNamedLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCountryNamedLocation(writer: SerializationWriter, countryNamedLocation: CountryNamedLocation | undefined = {} as CountryNamedLocation) : void {
        serializeNamedLocation(writer, countryNamedLocation)
        writer.writeCollectionOfPrimitiveValues<string>("countriesAndRegions", countryNamedLocation.countriesAndRegions);
        writer.writeEnumValue<CountryLookupMethodType>("countryLookupMethod", countryNamedLocation.countryLookupMethod);
        writer.writeBooleanValue("includeUnknownCountriesAndRegions", countryNamedLocation.includeUnknownCountriesAndRegions);
}
