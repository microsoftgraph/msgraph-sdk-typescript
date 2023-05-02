import {deserializeIntoIosUpdateDeviceStatus} from './deserializeIntoIosUpdateDeviceStatus';
import {IosUpdateDeviceStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosUpdateDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosUpdateDeviceStatus;
}
