import type {AuthenticationMethodTarget} from './authenticationMethodTarget';
import type {Fido2AuthenticationMethodConfiguration} from './fido2AuthenticationMethodConfiguration';
import type {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {serializeFido2KeyRestrictions} from './serializeFido2KeyRestrictions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFido2AuthenticationMethodConfiguration(writer: SerializationWriter, fido2AuthenticationMethodConfiguration: Fido2AuthenticationMethodConfiguration | undefined = {} as Fido2AuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, fido2AuthenticationMethodConfiguration)
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", fido2AuthenticationMethodConfiguration.includeTargets, serializeAuthenticationMethodTarget);
        writer.writeBooleanValue("isAttestationEnforced", fido2AuthenticationMethodConfiguration.isAttestationEnforced);
        writer.writeBooleanValue("isSelfServiceRegistrationAllowed", fido2AuthenticationMethodConfiguration.isSelfServiceRegistrationAllowed);
        writer.writeObjectValue<Fido2KeyRestrictions>("keyRestrictions", fido2AuthenticationMethodConfiguration.keyRestrictions, serializeFido2KeyRestrictions);
}
