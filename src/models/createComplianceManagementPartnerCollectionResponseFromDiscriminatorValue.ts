import {deserializeIntoComplianceManagementPartnerCollectionResponse} from './deserializeIntoComplianceManagementPartnerCollectionResponse';
import {ComplianceManagementPartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceManagementPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplianceManagementPartnerCollectionResponse;
}
