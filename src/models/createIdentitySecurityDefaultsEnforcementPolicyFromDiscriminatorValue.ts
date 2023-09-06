import { deserializeIntoIdentitySecurityDefaultsEnforcementPolicy } from './deserializeIntoIdentitySecurityDefaultsEnforcementPolicy';
import { type IdentitySecurityDefaultsEnforcementPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentitySecurityDefaultsEnforcementPolicy;
}
