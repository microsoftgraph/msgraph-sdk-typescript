import { type GeoCoordinates } from './geoCoordinates';
import { serializeGeoCoordinates } from './serializeGeoCoordinates';
import { type SignInLocation } from './signInLocation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSignInLocation(writer: SerializationWriter, signInLocation: SignInLocation | undefined = {} as SignInLocation) : void {
        writer.writeStringValue("city", signInLocation.city);
        writer.writeStringValue("countryOrRegion", signInLocation.countryOrRegion);
        writer.writeObjectValue<GeoCoordinates>("geoCoordinates", signInLocation.geoCoordinates, serializeGeoCoordinates);
        writer.writeStringValue("@odata.type", signInLocation.odataType);
        writer.writeStringValue("state", signInLocation.state);
        writer.writeAdditionalData(signInLocation.additionalData);
}
