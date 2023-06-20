import {ComplianceManagementPartnerAssignment} from './complianceManagementPartnerAssignment';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartnerAssignment(complianceManagementPartnerAssignment: ComplianceManagementPartnerAssignment | undefined = {} as ComplianceManagementPartnerAssignment, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", complianceManagementPartnerAssignment.odataType);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", complianceManagementPartnerAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
        writer.writeAdditionalData(complianceManagementPartnerAssignment.additionalData);
}
