import {CountryLookupMethodType} from './countryLookupMethodType';
import {CountryNamedLocation} from './countryNamedLocation';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountryNamedLocation(writer: SerializationWriter, countryNamedLocation: CountryNamedLocation | undefined = {} as CountryNamedLocation) : void {
        serializeNamedLocation(writer, countryNamedLocation)
        writer.writeCollectionOfPrimitiveValues<string>("countriesAndRegions", countryNamedLocation.countriesAndRegions);
        writer.writeEnumValue<CountryLookupMethodType>("countryLookupMethod", countryNamedLocation.countryLookupMethod);
        writer.writeBooleanValue("includeUnknownCountriesAndRegions", countryNamedLocation.includeUnknownCountriesAndRegions);
}
