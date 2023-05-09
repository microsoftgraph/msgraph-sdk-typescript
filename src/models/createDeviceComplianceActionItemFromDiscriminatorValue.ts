import {deserializeIntoDeviceComplianceActionItem} from './deserializeIntoDeviceComplianceActionItem';
import {DeviceComplianceActionItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceActionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceComplianceActionItem;
}
