import {deserializeIntoOutlookGeoCoordinates} from './deserializeIntoOutlookGeoCoordinates';
import {OutlookGeoCoordinates} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOutlookGeoCoordinates;
}
