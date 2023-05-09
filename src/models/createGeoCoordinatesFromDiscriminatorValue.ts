import {deserializeIntoGeoCoordinates} from './deserializeIntoGeoCoordinates';
import {GeoCoordinates} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGeoCoordinates;
}
