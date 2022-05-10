import {OutlookGeoCoordinatesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookGeoCoordinatesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookGeoCoordinatesImpl();
}
