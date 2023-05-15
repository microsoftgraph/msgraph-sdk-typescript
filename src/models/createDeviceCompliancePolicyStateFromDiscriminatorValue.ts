import {deserializeIntoDeviceCompliancePolicyState} from './deserializeIntoDeviceCompliancePolicyState';
import {DeviceCompliancePolicyState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyState;
}
