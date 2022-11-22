import {ComplianceManagementPartnerAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceManagementPartnerAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceManagementPartnerAssignmentCollectionResponse();
}
