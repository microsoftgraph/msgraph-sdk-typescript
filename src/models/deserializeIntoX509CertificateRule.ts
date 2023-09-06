import { X509CertificateAuthenticationMode } from './x509CertificateAuthenticationMode';
import { type X509CertificateRule } from './x509CertificateRule';
import { X509CertificateRuleType } from './x509CertificateRuleType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateRule(x509CertificateRule: X509CertificateRule | undefined = {} as X509CertificateRule) : Record<string, (node: ParseNode) => void> {
    return {
        "identifier": n => { x509CertificateRule.identifier = n.getStringValue(); },
        "@odata.type": n => { x509CertificateRule.odataType = n.getStringValue(); },
        "x509CertificateAuthenticationMode": n => { x509CertificateRule.x509CertificateAuthenticationMode = n.getEnumValue<X509CertificateAuthenticationMode>(X509CertificateAuthenticationMode); },
        "x509CertificateRuleType": n => { x509CertificateRule.x509CertificateRuleType = n.getEnumValue<X509CertificateRuleType>(X509CertificateRuleType); },
    }
}
