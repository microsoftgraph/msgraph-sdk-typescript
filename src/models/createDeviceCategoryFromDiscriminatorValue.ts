import { deserializeIntoDeviceCategory } from './deserializeIntoDeviceCategory';
import { type DeviceCategory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCategory;
}
