import {deserializeIntoDeviceCompliancePolicyStateCollectionResponse} from './deserializeIntoDeviceCompliancePolicyStateCollectionResponse';
import {DeviceCompliancePolicyStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyStateCollectionResponse;
}
