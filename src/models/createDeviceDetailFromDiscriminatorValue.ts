import { deserializeIntoDeviceDetail } from './deserializeIntoDeviceDetail';
import { type DeviceDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceDetail;
}
