import {createSigningCertificateUpdateStatusFromDiscriminatorValue} from './createSigningCertificateUpdateStatusFromDiscriminatorValue';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {FederatedIdpMfaBehavior} from './federatedIdpMfaBehavior';
import {InternalDomainFederation} from './internalDomainFederation';
import {PromptLoginBehavior} from './promptLoginBehavior';
import {serializeSigningCertificateUpdateStatus} from './serializeSigningCertificateUpdateStatus';
import {SigningCertificateUpdateStatus} from './signingCertificateUpdateStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternalDomainFederation(internalDomainFederation: InternalDomainFederation | undefined = {} as InternalDomainFederation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSamlOrWsFedProvider(internalDomainFederation),
        "activeSignInUri": n => { internalDomainFederation.activeSignInUri = n.getStringValue(); },
        "federatedIdpMfaBehavior": n => { internalDomainFederation.federatedIdpMfaBehavior = n.getEnumValue<FederatedIdpMfaBehavior>(FederatedIdpMfaBehavior); },
        "isSignedAuthenticationRequestRequired": n => { internalDomainFederation.isSignedAuthenticationRequestRequired = n.getBooleanValue(); },
        "nextSigningCertificate": n => { internalDomainFederation.nextSigningCertificate = n.getStringValue(); },
        "promptLoginBehavior": n => { internalDomainFederation.promptLoginBehavior = n.getEnumValue<PromptLoginBehavior>(PromptLoginBehavior); },
        "signingCertificateUpdateStatus": n => { internalDomainFederation.signingCertificateUpdateStatus = n.getObjectValue<SigningCertificateUpdateStatus>(createSigningCertificateUpdateStatusFromDiscriminatorValue); },
        "signOutUri": n => { internalDomainFederation.signOutUri = n.getStringValue(); },
    }
}
