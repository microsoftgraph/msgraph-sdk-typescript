import { type X509CertificateUserBinding } from './x509CertificateUserBinding';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoX509CertificateUserBinding(x509CertificateUserBinding: X509CertificateUserBinding | undefined = {} as X509CertificateUserBinding) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { x509CertificateUserBinding.odataType = n.getStringValue(); },
        "priority": n => { x509CertificateUserBinding.priority = n.getNumberValue(); },
        "userProperty": n => { x509CertificateUserBinding.userProperty = n.getStringValue(); },
        "x509CertificateField": n => { x509CertificateUserBinding.x509CertificateField = n.getStringValue(); },
    }
}
