import { type AuthenticationMethodTarget } from './authenticationMethodTarget';
import { createAuthenticationMethodTargetFromDiscriminatorValue } from './createAuthenticationMethodTargetFromDiscriminatorValue';
import { createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue } from './createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue';
import { createX509CertificateUserBindingFromDiscriminatorValue } from './createX509CertificateUserBindingFromDiscriminatorValue';
import { deserializeIntoAuthenticationMethodConfiguration } from './deserializeIntoAuthenticationMethodConfiguration';
import { serializeAuthenticationMethodTarget } from './serializeAuthenticationMethodTarget';
import { serializeX509CertificateAuthenticationModeConfiguration } from './serializeX509CertificateAuthenticationModeConfiguration';
import { serializeX509CertificateUserBinding } from './serializeX509CertificateUserBinding';
import { type X509CertificateAuthenticationMethodConfiguration } from './x509CertificateAuthenticationMethodConfiguration';
import { type X509CertificateAuthenticationModeConfiguration } from './x509CertificateAuthenticationModeConfiguration';
import { type X509CertificateUserBinding } from './x509CertificateUserBinding';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateAuthenticationMethodConfiguration(x509CertificateAuthenticationMethodConfiguration: X509CertificateAuthenticationMethodConfiguration | undefined = {} as X509CertificateAuthenticationMethodConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethodConfiguration(x509CertificateAuthenticationMethodConfiguration),
        "authenticationModeConfiguration": n => { x509CertificateAuthenticationMethodConfiguration.authenticationModeConfiguration = n.getObjectValue<X509CertificateAuthenticationModeConfiguration>(createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue); },
        "certificateUserBindings": n => { x509CertificateAuthenticationMethodConfiguration.certificateUserBindings = n.getCollectionOfObjectValues<X509CertificateUserBinding>(createX509CertificateUserBindingFromDiscriminatorValue); },
        "includeTargets": n => { x509CertificateAuthenticationMethodConfiguration.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
    }
}
