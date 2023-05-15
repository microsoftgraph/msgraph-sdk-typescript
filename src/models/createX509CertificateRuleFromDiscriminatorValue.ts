import {deserializeIntoX509CertificateRule} from './deserializeIntoX509CertificateRule';
import {X509CertificateRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createX509CertificateRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoX509CertificateRule;
}
