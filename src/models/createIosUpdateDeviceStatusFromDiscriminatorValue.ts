import { deserializeIntoIosUpdateDeviceStatus } from './deserializeIntoIosUpdateDeviceStatus';
import { type IosUpdateDeviceStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosUpdateDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosUpdateDeviceStatus;
}
