import { deserializeIntoGeoCoordinates } from './deserializeIntoGeoCoordinates';
import { type GeoCoordinates } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGeoCoordinates;
}
