import {createX509CertificateRuleFromDiscriminatorValue} from './createX509CertificateRuleFromDiscriminatorValue';
import {serializeX509CertificateRule} from './serializeX509CertificateRule';
import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {X509CertificateAuthenticationModeConfiguration} from './x509CertificateAuthenticationModeConfiguration';
import {X509CertificateRule} from './x509CertificateRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateAuthenticationModeConfiguration(x509CertificateAuthenticationModeConfiguration: X509CertificateAuthenticationModeConfiguration | undefined = {} as X509CertificateAuthenticationModeConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { x509CertificateAuthenticationModeConfiguration.odataType = n.getStringValue(); },
        "rules": n => { x509CertificateAuthenticationModeConfiguration.rules = n.getCollectionOfObjectValues<X509CertificateRule>(createX509CertificateRuleFromDiscriminatorValue); },
        "x509CertificateAuthenticationDefaultMode": n => { x509CertificateAuthenticationModeConfiguration.x509CertificateAuthenticationDefaultMode = n.getEnumValue<X509CertificateAuthenticationMode>(X509CertificateAuthenticationMode); },
    }
}
