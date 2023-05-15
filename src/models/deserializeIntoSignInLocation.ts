import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {GeoCoordinates} from './geoCoordinates';
import {serializeGeoCoordinates} from './serializeGeoCoordinates';
import {SignInLocation} from './signInLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInLocation(signInLocation: SignInLocation | undefined = {} as SignInLocation) : Record<string, (node: ParseNode) => void> {
    return {
        "city": n => { signInLocation.city = n.getStringValue(); },
        "countryOrRegion": n => { signInLocation.countryOrRegion = n.getStringValue(); },
        "geoCoordinates": n => { signInLocation.geoCoordinates = n.getObjectValue<GeoCoordinates>(createGeoCoordinatesFromDiscriminatorValue); },
        "@odata.type": n => { signInLocation.odataType = n.getStringValue(); },
        "state": n => { signInLocation.state = n.getStringValue(); },
    }
}
