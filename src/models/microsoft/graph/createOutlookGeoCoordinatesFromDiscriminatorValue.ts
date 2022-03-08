import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookGeoCoordinates {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookGeoCoordinates();
}
