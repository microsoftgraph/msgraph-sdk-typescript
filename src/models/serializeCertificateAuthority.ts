import {CertificateAuthority} from './certificateAuthority';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificateAuthority(writer: SerializationWriter, certificateAuthority: CertificateAuthority | undefined = {} as CertificateAuthority) : void {
        writer.writeStringValue("certificate", certificateAuthority.certificate);
        writer.writeStringValue("certificateRevocationListUrl", certificateAuthority.certificateRevocationListUrl);
        writer.writeStringValue("deltaCertificateRevocationListUrl", certificateAuthority.deltaCertificateRevocationListUrl);
        writer.writeBooleanValue("isRootAuthority", certificateAuthority.isRootAuthority);
        writer.writeStringValue("issuer", certificateAuthority.issuer);
        writer.writeStringValue("issuerSki", certificateAuthority.issuerSki);
        writer.writeStringValue("@odata.type", certificateAuthority.odataType);
        writer.writeAdditionalData(certificateAuthority.additionalData);
}
