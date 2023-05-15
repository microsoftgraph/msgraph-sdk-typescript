import {deserializeIntoDeviceCompliancePolicyAssignmentCollectionResponse} from './deserializeIntoDeviceCompliancePolicyAssignmentCollectionResponse';
import {DeviceCompliancePolicyAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyAssignmentCollectionResponse;
}
