import {AttestationLevel} from './attestationLevel';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFido2AuthenticationMethod(fido2AuthenticationMethod: Fido2AuthenticationMethod | undefined = {} as Fido2AuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(fido2AuthenticationMethod),
        "aaGuid": n => { fido2AuthenticationMethod.aaGuid = n.getStringValue(); },
        "attestationCertificates": n => { fido2AuthenticationMethod.attestationCertificates = n.getCollectionOfPrimitiveValues<string>(); },
        "attestationLevel": n => { fido2AuthenticationMethod.attestationLevel = n.getEnumValue<AttestationLevel>(AttestationLevel); },
        "createdDateTime": n => { fido2AuthenticationMethod.createdDateTime = n.getDateValue(); },
        "displayName": n => { fido2AuthenticationMethod.displayName = n.getStringValue(); },
        "model": n => { fido2AuthenticationMethod.model = n.getStringValue(); },
    }
}
