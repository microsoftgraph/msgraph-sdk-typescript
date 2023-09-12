import { serializeX509CertificateRule } from './serializeX509CertificateRule';
import { X509CertificateAuthenticationMode } from './x509CertificateAuthenticationMode';
import { type X509CertificateAuthenticationModeConfiguration } from './x509CertificateAuthenticationModeConfiguration';
import { type X509CertificateRule } from './x509CertificateRule';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeX509CertificateAuthenticationModeConfiguration(writer: SerializationWriter, x509CertificateAuthenticationModeConfiguration: X509CertificateAuthenticationModeConfiguration | undefined = {} as X509CertificateAuthenticationModeConfiguration) : void {
        writer.writeStringValue("@odata.type", x509CertificateAuthenticationModeConfiguration.odataType);
        writer.writeCollectionOfObjectValues<X509CertificateRule>("rules", x509CertificateAuthenticationModeConfiguration.rules, serializeX509CertificateRule);
        writer.writeEnumValue<X509CertificateAuthenticationMode>("x509CertificateAuthenticationDefaultMode", x509CertificateAuthenticationModeConfiguration.x509CertificateAuthenticationDefaultMode);
        writer.writeAdditionalData(x509CertificateAuthenticationModeConfiguration.additionalData);
}
