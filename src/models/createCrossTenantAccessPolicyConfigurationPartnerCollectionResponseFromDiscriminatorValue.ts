import {deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse} from './deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse';
import {CrossTenantAccessPolicyConfigurationPartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyConfigurationPartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyConfigurationPartnerCollectionResponse;
}
