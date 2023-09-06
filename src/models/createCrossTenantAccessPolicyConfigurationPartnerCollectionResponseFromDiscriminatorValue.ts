import { deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse } from './deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse';
import { type CrossTenantAccessPolicyConfigurationPartnerCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyConfigurationPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse;
}
