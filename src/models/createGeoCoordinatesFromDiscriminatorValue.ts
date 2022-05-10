import {GeoCoordinatesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) : GeoCoordinatesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GeoCoordinatesImpl();
}
