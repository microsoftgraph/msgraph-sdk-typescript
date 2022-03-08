import {CertificateBasedAuthConfigurationCollectionResponse} from './certificateBasedAuthConfigurationCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificateBasedAuthConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificateBasedAuthConfigurationCollectionResponse();
}
