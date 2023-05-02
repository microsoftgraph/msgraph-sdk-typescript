import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {IdentitySecurityDefaultsEnforcementPolicy} from './identitySecurityDefaultsEnforcementPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySecurityDefaultsEnforcementPolicy(identitySecurityDefaultsEnforcementPolicy: IdentitySecurityDefaultsEnforcementPolicy | undefined = {} as IdentitySecurityDefaultsEnforcementPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(identitySecurityDefaultsEnforcementPolicy),
        "isEnabled": n => { identitySecurityDefaultsEnforcementPolicy.isEnabled = n.getBooleanValue(); },
    }
}
