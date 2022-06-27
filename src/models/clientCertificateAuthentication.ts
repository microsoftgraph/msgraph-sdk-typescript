import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {Pkcs12CertificateInformation} from './pkcs12CertificateInformation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ClientCertificateAuthentication extends Partial<AdditionalDataHolder>, ApiAuthenticationConfigurationBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of certificates uploaded for this API connector. */
    certificateList?: Pkcs12CertificateInformation[] | undefined;
}
