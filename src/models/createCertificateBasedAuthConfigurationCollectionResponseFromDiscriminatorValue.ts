import { deserializeIntoCertificateBasedAuthConfigurationCollectionResponse } from './deserializeIntoCertificateBasedAuthConfigurationCollectionResponse';
import { type CertificateBasedAuthConfigurationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCertificateBasedAuthConfigurationCollectionResponse;
}
