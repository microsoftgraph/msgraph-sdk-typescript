import {CrossTenantAccessPolicyConfigurationDefault} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyConfigurationDefault {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyConfigurationDefault();
}
