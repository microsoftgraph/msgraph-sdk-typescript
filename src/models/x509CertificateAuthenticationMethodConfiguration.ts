import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {X509CertificateAuthenticationModeConfiguration} from './x509CertificateAuthenticationModeConfiguration';
import {X509CertificateUserBinding} from './x509CertificateUserBinding';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface X509CertificateAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration, Parsable {
    /**
     * Defines strong authentication configurations. This configuration includes the default authentication mode and the different rules for strong authentication bindings.
     */
    authenticationModeConfiguration?: X509CertificateAuthenticationModeConfiguration | undefined;
    /**
     * Defines fields in the X.509 certificate that map to attributes of the Azure AD user object in order to bind the certificate to the user. The priority of the object determines the order in which the binding is carried out. The first binding that matches will be used and the rest ignored.
     */
    certificateUserBindings?: X509CertificateUserBinding[] | undefined;
    /**
     * A collection of groups that are enabled to use the authentication method.
     */
    includeTargets?: AuthenticationMethodTarget[] | undefined;
}
