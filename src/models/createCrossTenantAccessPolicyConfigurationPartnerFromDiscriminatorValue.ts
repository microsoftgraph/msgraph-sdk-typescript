import {deserializeIntoCrossTenantAccessPolicyConfigurationPartner} from './deserializeIntoCrossTenantAccessPolicyConfigurationPartner';
import {CrossTenantAccessPolicyConfigurationPartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyConfigurationPartner;
}
