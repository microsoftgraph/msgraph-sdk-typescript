import {X509CertificateRuleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateRuleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : X509CertificateRuleCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new X509CertificateRuleCollectionResponse();
}
