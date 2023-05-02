import {deserializeIntoCertificateBasedAuthConfigurationCollectionResponse} from './deserializeIntoCertificateBasedAuthConfigurationCollectionResponse';
import {CertificateBasedAuthConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCertificateBasedAuthConfigurationCollectionResponse;
}
