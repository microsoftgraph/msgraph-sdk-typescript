import {CrossTenantAccessPolicyConfigurationPartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyConfigurationPartner {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyConfigurationPartner();
}
