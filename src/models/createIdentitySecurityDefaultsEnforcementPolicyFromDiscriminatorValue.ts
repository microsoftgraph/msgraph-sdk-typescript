import {deserializeIntoIdentitySecurityDefaultsEnforcementPolicy} from './deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import {IdentitySecurityDefaultsEnforcementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentitySecurityDefaultsEnforcementPolicy;
}
