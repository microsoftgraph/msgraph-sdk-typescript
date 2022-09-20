import {X509CertificateRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : X509CertificateRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new X509CertificateRule();
}
