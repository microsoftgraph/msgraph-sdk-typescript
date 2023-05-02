import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {createFido2KeyRestrictionsFromDiscriminatorValue} from './createFido2KeyRestrictionsFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodConfiguration} from './deserializeIntoAuthenticationMethodConfiguration';
import {Fido2AuthenticationMethodConfiguration} from './fido2AuthenticationMethodConfiguration';
import {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {serializeFido2KeyRestrictions} from './serializeFido2KeyRestrictions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethodConfiguration(fido2AuthenticationMethodConfiguration: Fido2AuthenticationMethodConfiguration | undefined = {} as Fido2AuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(fido2AuthenticationMethodConfiguration),
        "includeTargets": n => { fido2AuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
        "isAttestationEnforced": n => { fido2AuthenticationMethodConfiguration.isAttestationEnforced = n.getBooleanValue(); },
        "isSelfServiceRegistrationAllowed": n => { fido2AuthenticationMethodConfiguration.isSelfServiceRegistrationAllowed = n.getBooleanValue(); },
        "keyRestrictions": n => { fido2AuthenticationMethodConfiguration.keyRestrictions = n.getObjectValue<Fido2KeyRestrictions>(createFido2KeyRestrictionsFromDiscriminatorValue); },
    }
}
