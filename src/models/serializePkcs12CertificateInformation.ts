import {Pkcs12CertificateInformation} from './pkcs12CertificateInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePkcs12CertificateInformation(writer: SerializationWriter, pkcs12CertificateInformation: Pkcs12CertificateInformation | undefined = {} as Pkcs12CertificateInformation) : void {
        writer.writeBooleanValue("isActive", pkcs12CertificateInformation.isActive);
        writer.writeNumberValue("notAfter", pkcs12CertificateInformation.notAfter);
        writer.writeNumberValue("notBefore", pkcs12CertificateInformation.notBefore);
        writer.writeStringValue("@odata.type", pkcs12CertificateInformation.odataType);
        writer.writeStringValue("thumbprint", pkcs12CertificateInformation.thumbprint);
        writer.writeAdditionalData(pkcs12CertificateInformation.additionalData);
}
