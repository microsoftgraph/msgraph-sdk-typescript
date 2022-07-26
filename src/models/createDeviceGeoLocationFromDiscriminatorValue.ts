import {DeviceGeoLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceGeoLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceGeoLocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceGeoLocation();
}
