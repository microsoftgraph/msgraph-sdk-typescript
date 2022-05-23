import {IdentitySecurityDefaultsEnforcementPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySecurityDefaultsEnforcementPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentitySecurityDefaultsEnforcementPolicyImpl();
}
