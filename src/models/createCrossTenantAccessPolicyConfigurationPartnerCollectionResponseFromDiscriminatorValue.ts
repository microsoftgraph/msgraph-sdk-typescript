import {CrossTenantAccessPolicyConfigurationPartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyConfigurationPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyConfigurationPartnerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyConfigurationPartnerCollectionResponse();
}
