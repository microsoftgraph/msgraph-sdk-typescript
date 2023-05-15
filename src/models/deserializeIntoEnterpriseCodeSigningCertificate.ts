import {CertificateStatus} from './certificateStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EnterpriseCodeSigningCertificate} from './enterpriseCodeSigningCertificate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnterpriseCodeSigningCertificate(enterpriseCodeSigningCertificate: EnterpriseCodeSigningCertificate | undefined = {} as EnterpriseCodeSigningCertificate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(enterpriseCodeSigningCertificate),
        "content": n => { enterpriseCodeSigningCertificate.content = n.getStringValue(); },
        "expirationDateTime": n => { enterpriseCodeSigningCertificate.expirationDateTime = n.getDateValue(); },
        "issuer": n => { enterpriseCodeSigningCertificate.issuer = n.getStringValue(); },
        "issuerName": n => { enterpriseCodeSigningCertificate.issuerName = n.getStringValue(); },
        "status": n => { enterpriseCodeSigningCertificate.status = n.getEnumValue<CertificateStatus>(CertificateStatus); },
        "subject": n => { enterpriseCodeSigningCertificate.subject = n.getStringValue(); },
        "subjectName": n => { enterpriseCodeSigningCertificate.subjectName = n.getStringValue(); },
        "uploadDateTime": n => { enterpriseCodeSigningCertificate.uploadDateTime = n.getDateValue(); },
    }
}
