import { type ComplianceManagementPartner } from './complianceManagementPartner';
import { type ComplianceManagementPartnerAssignment } from './complianceManagementPartnerAssignment';
import { DeviceManagementPartnerTenantState } from './deviceManagementPartnerTenantState';
import { serializeComplianceManagementPartnerAssignment } from './serializeComplianceManagementPartnerAssignment';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartner(writer: SerializationWriter, complianceManagementPartner: ComplianceManagementPartner | undefined = {} as ComplianceManagementPartner) : void {
        serializeEntity(writer, complianceManagementPartner)
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignment>("androidEnrollmentAssignments", complianceManagementPartner.androidEnrollmentAssignments, serializeComplianceManagementPartnerAssignment);
        writer.writeBooleanValue("androidOnboarded", complianceManagementPartner.androidOnboarded);
        writer.writeStringValue("displayName", complianceManagementPartner.displayName);
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignment>("iosEnrollmentAssignments", complianceManagementPartner.iosEnrollmentAssignments, serializeComplianceManagementPartnerAssignment);
        writer.writeBooleanValue("iosOnboarded", complianceManagementPartner.iosOnboarded);
        writer.writeDateValue("lastHeartbeatDateTime", complianceManagementPartner.lastHeartbeatDateTime);
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignment>("macOsEnrollmentAssignments", complianceManagementPartner.macOsEnrollmentAssignments, serializeComplianceManagementPartnerAssignment);
        writer.writeBooleanValue("macOsOnboarded", complianceManagementPartner.macOsOnboarded);
        writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", complianceManagementPartner.partnerState);
}
