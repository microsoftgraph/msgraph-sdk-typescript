import {DeviceComplianceActionItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceComplianceActionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceComplianceActionItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceComplianceActionItemImpl();
}
