import { type X509CertificateUserBinding } from './x509CertificateUserBinding';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeX509CertificateUserBinding(writer: SerializationWriter, x509CertificateUserBinding: X509CertificateUserBinding | undefined = {} as X509CertificateUserBinding) : void {
        writer.writeStringValue("@odata.type", x509CertificateUserBinding.odataType);
        writer.writeNumberValue("priority", x509CertificateUserBinding.priority);
        writer.writeStringValue("userProperty", x509CertificateUserBinding.userProperty);
        writer.writeStringValue("x509CertificateField", x509CertificateUserBinding.x509CertificateField);
        writer.writeAdditionalData(x509CertificateUserBinding.additionalData);
}
