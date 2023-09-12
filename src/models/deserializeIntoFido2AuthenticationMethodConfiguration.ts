import { type AuthenticationMethodTarget } from './authenticationMethodTarget';
import { createAuthenticationMethodTargetFromDiscriminatorValue } from './createAuthenticationMethodTargetFromDiscriminatorValue';
import { createFido2KeyRestrictionsFromDiscriminatorValue } from './createFido2KeyRestrictionsFromDiscriminatorValue';
import { deserializeIntoAuthenticationMethodConfiguration } from './deserializeIntoAuthenticationMethodConfiguration';
import { type Fido2AuthenticationMethodConfiguration } from './fido2AuthenticationMethodConfiguration';
import { type Fido2KeyRestrictions } from './fido2KeyRestrictions';
import { serializeAuthenticationMethodTarget } from './serializeAuthenticationMethodTarget';
import { serializeFido2KeyRestrictions } from './serializeFido2KeyRestrictions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethodConfiguration(fido2AuthenticationMethodConfiguration: Fido2AuthenticationMethodConfiguration | undefined = {} as Fido2AuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(fido2AuthenticationMethodConfiguration),
        "includeTargets": n => { fido2AuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
        "isAttestationEnforced": n => { fido2AuthenticationMethodConfiguration.isAttestationEnforced = n.getBooleanValue(); },
        "isSelfServiceRegistrationAllowed": n => { fido2AuthenticationMethodConfiguration.isSelfServiceRegistrationAllowed = n.getBooleanValue(); },
        "keyRestrictions": n => { fido2AuthenticationMethodConfiguration.keyRestrictions = n.getObjectValue<Fido2KeyRestrictions>(createFido2KeyRestrictionsFromDiscriminatorValue); },
    }
}
