import {ClientCertificateAuthenticationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClientCertificateAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClientCertificateAuthenticationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClientCertificateAuthenticationImpl();
}
