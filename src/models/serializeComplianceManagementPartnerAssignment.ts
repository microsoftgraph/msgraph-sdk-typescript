import { type ComplianceManagementPartnerAssignment } from './complianceManagementPartnerAssignment';
import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartnerAssignment(writer: SerializationWriter, complianceManagementPartnerAssignment: ComplianceManagementPartnerAssignment | undefined = {} as ComplianceManagementPartnerAssignment) : void {
        writer.writeStringValue("@odata.type", complianceManagementPartnerAssignment.odataType);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", complianceManagementPartnerAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
        writer.writeAdditionalData(complianceManagementPartnerAssignment.additionalData);
}
