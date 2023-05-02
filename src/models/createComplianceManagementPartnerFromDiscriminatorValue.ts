import {deserializeIntoComplianceManagementPartner} from './deserializeIntoComplianceManagementPartner';
import {ComplianceManagementPartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplianceManagementPartner;
}
