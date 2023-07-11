import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {Pkcs12CertificateInformation} from './pkcs12CertificateInformation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ClientCertificateAuthentication extends ApiAuthenticationConfigurationBase, Parsable {
    /**
     * The list of certificates uploaded for this API connector.
     */
    certificateList?: Pkcs12CertificateInformation[] | undefined;
}
