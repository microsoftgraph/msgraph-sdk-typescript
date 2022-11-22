import {X509CertificateAuthenticationMethodConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : X509CertificateAuthenticationMethodConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new X509CertificateAuthenticationMethodConfigurationCollectionResponse();
}
