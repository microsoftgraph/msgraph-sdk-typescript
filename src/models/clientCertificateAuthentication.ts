import type {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import type {Pkcs12CertificateInformation} from './pkcs12CertificateInformation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ClientCertificateAuthentication extends ApiAuthenticationConfigurationBase, Parsable {
    /**
     * The list of certificates uploaded for this API connector.
     */
    certificateList?: Pkcs12CertificateInformation[] | undefined;
}
