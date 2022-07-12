import {ClientCertificateAuthentication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClientCertificateAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClientCertificateAuthentication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClientCertificateAuthentication();
}
