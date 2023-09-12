import { deserializeIntoDeviceCompliancePolicyStateCollectionResponse } from './deserializeIntoDeviceCompliancePolicyStateCollectionResponse';
import { type DeviceCompliancePolicyStateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyStateCollectionResponse;
}
