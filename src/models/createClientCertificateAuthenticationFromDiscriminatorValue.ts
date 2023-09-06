import { deserializeIntoClientCertificateAuthentication } from './deserializeIntoClientCertificateAuthentication';
import { type ClientCertificateAuthentication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createClientCertificateAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClientCertificateAuthentication;
}
