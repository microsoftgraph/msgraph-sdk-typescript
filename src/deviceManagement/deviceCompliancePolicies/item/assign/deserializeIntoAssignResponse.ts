import { createDeviceCompliancePolicyAssignmentFromDiscriminatorValue } from '../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceCompliancePolicyAssignment } from '../../../../models/deviceCompliancePolicyAssignment';
import { serializeDeviceCompliancePolicyAssignment } from '../../../../models/serializeDeviceCompliancePolicyAssignment';
import { type AssignResponse } from './assignResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignResponse(assignResponse: AssignResponse | undefined = {} as AssignResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignResponse),
        "value": n => { assignResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignment>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
    }
}
