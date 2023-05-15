import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from './createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignmentCollectionResponse} from './deviceCompliancePolicyAssignmentCollectionResponse';
import {serializeDeviceCompliancePolicyAssignment} from './serializeDeviceCompliancePolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyAssignmentCollectionResponse(deviceCompliancePolicyAssignmentCollectionResponse: DeviceCompliancePolicyAssignmentCollectionResponse | undefined = {} as DeviceCompliancePolicyAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicyAssignmentCollectionResponse),
        "value": n => { deviceCompliancePolicyAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignment>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
    }
}
