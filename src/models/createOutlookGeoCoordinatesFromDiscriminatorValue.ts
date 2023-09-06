import { deserializeIntoOutlookGeoCoordinates } from './deserializeIntoOutlookGeoCoordinates';
import { type OutlookGeoCoordinates } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOutlookGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOutlookGeoCoordinates;
}
