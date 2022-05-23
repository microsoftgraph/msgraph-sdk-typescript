import {ComplianceManagementPartnerAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceManagementPartnerAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceManagementPartnerAssignmentImpl();
}
