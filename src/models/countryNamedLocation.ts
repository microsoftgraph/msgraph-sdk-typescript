import {CountryLookupMethodType} from './countryLookupMethodType';
import {NamedLocation} from './namedLocation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CountryNamedLocation extends Partial<AdditionalDataHolder>, NamedLocation, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of countries and/or regions in two-letter format specified by ISO 3166-2. */
    countriesAndRegions?: string[] | undefined;
    /** Determines what method is used to decide which country the user is located in. Possible values are clientIpAddress (default) and authenticatorAppGps. */
    countryLookupMethod?: CountryLookupMethodType | undefined;
    /** true if IP addresses that don't map to a country or region should be included in the named location. Optional. Default value is false. */
    includeUnknownCountriesAndRegions?: boolean | undefined;
}
