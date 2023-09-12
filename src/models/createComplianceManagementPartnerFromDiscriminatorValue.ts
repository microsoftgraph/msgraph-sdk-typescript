import { deserializeIntoComplianceManagementPartner } from './deserializeIntoComplianceManagementPartner';
import { type ComplianceManagementPartner } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplianceManagementPartner;
}
