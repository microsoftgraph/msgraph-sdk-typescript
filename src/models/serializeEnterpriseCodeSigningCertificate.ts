import { CertificateStatus } from './certificateStatus';
import { type EnterpriseCodeSigningCertificate } from './enterpriseCodeSigningCertificate';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEnterpriseCodeSigningCertificate(writer: SerializationWriter, enterpriseCodeSigningCertificate: EnterpriseCodeSigningCertificate | undefined = {} as EnterpriseCodeSigningCertificate) : void {
        serializeEntity(writer, enterpriseCodeSigningCertificate)
        writer.writeStringValue("content", enterpriseCodeSigningCertificate.content);
        writer.writeDateValue("expirationDateTime", enterpriseCodeSigningCertificate.expirationDateTime);
        writer.writeStringValue("issuer", enterpriseCodeSigningCertificate.issuer);
        writer.writeStringValue("issuerName", enterpriseCodeSigningCertificate.issuerName);
        writer.writeEnumValue<CertificateStatus>("status", enterpriseCodeSigningCertificate.status);
        writer.writeStringValue("subject", enterpriseCodeSigningCertificate.subject);
        writer.writeStringValue("subjectName", enterpriseCodeSigningCertificate.subjectName);
        writer.writeDateValue("uploadDateTime", enterpriseCodeSigningCertificate.uploadDateTime);
}
