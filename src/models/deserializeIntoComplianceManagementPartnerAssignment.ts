import { type ComplianceManagementPartnerAssignment } from './complianceManagementPartnerAssignment';
import { createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue } from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartnerAssignment(complianceManagementPartnerAssignment: ComplianceManagementPartnerAssignment | undefined = {} as ComplianceManagementPartnerAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { complianceManagementPartnerAssignment.odataType = n.getStringValue(); },
        "target": n => { complianceManagementPartnerAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
