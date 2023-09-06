import { deserializeIntoDeviceInfo } from './deserializeIntoDeviceInfo';
import { type DeviceInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceInfo;
}
