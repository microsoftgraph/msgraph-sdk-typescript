import {DeviceCompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyImpl();
}
