import { deserializeIntoPolicyBase } from './deserializeIntoPolicyBase';
import { type IdentitySecurityDefaultsEnforcementPolicy } from './identitySecurityDefaultsEnforcementPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySecurityDefaultsEnforcementPolicy(identitySecurityDefaultsEnforcementPolicy: IdentitySecurityDefaultsEnforcementPolicy | undefined = {} as IdentitySecurityDefaultsEnforcementPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(identitySecurityDefaultsEnforcementPolicy),
        "isEnabled": n => { identitySecurityDefaultsEnforcementPolicy.isEnabled = n.getBooleanValue(); },
    }
}
