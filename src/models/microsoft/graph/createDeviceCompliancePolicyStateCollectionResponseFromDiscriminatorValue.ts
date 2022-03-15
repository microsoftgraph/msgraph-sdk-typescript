import {DeviceCompliancePolicyStateCollectionResponse} from './deviceCompliancePolicyStateCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyStateCollectionResponse();
}
