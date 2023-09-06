import { deserializeIntoDeviceComplianceActionItem } from './deserializeIntoDeviceComplianceActionItem';
import { type DeviceComplianceActionItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceComplianceActionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceActionItem;
}
