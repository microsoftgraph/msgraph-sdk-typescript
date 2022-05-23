import {ComplianceManagementPartnerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceManagementPartnerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceManagementPartnerImpl();
}
