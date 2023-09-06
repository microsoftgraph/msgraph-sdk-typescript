import { type ComplianceManagementPartner } from './complianceManagementPartner';
import { type ComplianceManagementPartnerAssignment } from './complianceManagementPartnerAssignment';
import { createComplianceManagementPartnerAssignmentFromDiscriminatorValue } from './createComplianceManagementPartnerAssignmentFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { DeviceManagementPartnerTenantState } from './deviceManagementPartnerTenantState';
import { serializeComplianceManagementPartnerAssignment } from './serializeComplianceManagementPartnerAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartner(complianceManagementPartner: ComplianceManagementPartner | undefined = {} as ComplianceManagementPartner) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(complianceManagementPartner),
        "androidEnrollmentAssignments": n => { complianceManagementPartner.androidEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignment>(createComplianceManagementPartnerAssignmentFromDiscriminatorValue); },
        "androidOnboarded": n => { complianceManagementPartner.androidOnboarded = n.getBooleanValue(); },
        "displayName": n => { complianceManagementPartner.displayName = n.getStringValue(); },
        "iosEnrollmentAssignments": n => { complianceManagementPartner.iosEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignment>(createComplianceManagementPartnerAssignmentFromDiscriminatorValue); },
        "iosOnboarded": n => { complianceManagementPartner.iosOnboarded = n.getBooleanValue(); },
        "lastHeartbeatDateTime": n => { complianceManagementPartner.lastHeartbeatDateTime = n.getDateValue(); },
        "macOsEnrollmentAssignments": n => { complianceManagementPartner.macOsEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignment>(createComplianceManagementPartnerAssignmentFromDiscriminatorValue); },
        "macOsOnboarded": n => { complianceManagementPartner.macOsOnboarded = n.getBooleanValue(); },
        "partnerState": n => { complianceManagementPartner.partnerState = n.getEnumValue<DeviceManagementPartnerTenantState>(DeviceManagementPartnerTenantState); },
    }
}
