import {ComplianceManagementPartnerCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceManagementPartnerCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceManagementPartnerCollectionResponseImpl();
}
