import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {serializeAuthenticationMethodConfiguration} from './serializeAuthenticationMethodConfiguration';
import {serializeAuthenticationMethodTarget} from './serializeAuthenticationMethodTarget';
import {serializeX509CertificateAuthenticationModeConfiguration} from './serializeX509CertificateAuthenticationModeConfiguration';
import {serializeX509CertificateUserBinding} from './serializeX509CertificateUserBinding';
import {X509CertificateAuthenticationMethodConfiguration} from './x509CertificateAuthenticationMethodConfiguration';
import {X509CertificateAuthenticationModeConfiguration} from './x509CertificateAuthenticationModeConfiguration';
import {X509CertificateUserBinding} from './x509CertificateUserBinding';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateAuthenticationMethodConfiguration(writer: SerializationWriter, x509CertificateAuthenticationMethodConfiguration: X509CertificateAuthenticationMethodConfiguration | undefined = {} as X509CertificateAuthenticationMethodConfiguration) : void {
        serializeAuthenticationMethodConfiguration(writer, x509CertificateAuthenticationMethodConfiguration)
        writer.writeObjectValue<X509CertificateAuthenticationModeConfiguration>("authenticationModeConfiguration", x509CertificateAuthenticationMethodConfiguration.authenticationModeConfiguration, serializeX509CertificateAuthenticationModeConfiguration);
        writer.writeCollectionOfObjectValues<X509CertificateUserBinding>("certificateUserBindings", x509CertificateAuthenticationMethodConfiguration.certificateUserBindings, serializeX509CertificateUserBinding);
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", x509CertificateAuthenticationMethodConfiguration.includeTargets, serializeAuthenticationMethodTarget);
}
