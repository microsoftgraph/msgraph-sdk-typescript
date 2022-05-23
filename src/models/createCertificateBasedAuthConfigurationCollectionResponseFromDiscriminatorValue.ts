import {CertificateBasedAuthConfigurationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CertificateBasedAuthConfigurationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CertificateBasedAuthConfigurationCollectionResponseImpl();
}
