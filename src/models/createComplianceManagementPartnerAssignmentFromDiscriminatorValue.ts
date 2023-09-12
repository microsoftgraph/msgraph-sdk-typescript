import { deserializeIntoComplianceManagementPartnerAssignment } from './deserializeIntoComplianceManagementPartnerAssignment';
import { type ComplianceManagementPartnerAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplianceManagementPartnerAssignment;
}
