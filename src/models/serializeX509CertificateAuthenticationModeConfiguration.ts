import {serializeX509CertificateRule} from './serializeX509CertificateRule';
import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {X509CertificateAuthenticationModeConfiguration} from './x509CertificateAuthenticationModeConfiguration';
import {X509CertificateRule} from './x509CertificateRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeX509CertificateAuthenticationModeConfiguration(writer: SerializationWriter, x509CertificateAuthenticationModeConfiguration: X509CertificateAuthenticationModeConfiguration | undefined = {} as X509CertificateAuthenticationModeConfiguration) : void {
        writer.writeStringValue("@odata.type", x509CertificateAuthenticationModeConfiguration.odataType);
        writer.writeCollectionOfObjectValues<X509CertificateRule>("rules", x509CertificateAuthenticationModeConfiguration.rules, serializeX509CertificateRule);
        writer.writeEnumValue<X509CertificateAuthenticationMode>("x509CertificateAuthenticationDefaultMode", x509CertificateAuthenticationModeConfiguration.x509CertificateAuthenticationDefaultMode);
        writer.writeAdditionalData(x509CertificateAuthenticationModeConfiguration.additionalData);
}
