import { createDeviceCompliancePolicyAssignmentFromDiscriminatorValue } from '../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import { type DeviceCompliancePolicyAssignment } from '../../../../models/deviceCompliancePolicyAssignment';
import { serializeDeviceCompliancePolicyAssignment } from '../../../../models/serializeDeviceCompliancePolicyAssignment';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: AssignPostRequestBody | undefined = {} as AssignPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "assignments": n => { assignPostRequestBody.assignments = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignment>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
    }
}
