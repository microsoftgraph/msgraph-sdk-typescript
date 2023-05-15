import {deserializeIntoDeviceGeoLocation} from './deserializeIntoDeviceGeoLocation';
import {DeviceGeoLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceGeoLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceGeoLocation;
}
