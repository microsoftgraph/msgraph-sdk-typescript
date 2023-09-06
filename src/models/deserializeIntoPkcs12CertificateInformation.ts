import { type Pkcs12CertificateInformation } from './pkcs12CertificateInformation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPkcs12CertificateInformation(pkcs12CertificateInformation: Pkcs12CertificateInformation | undefined = {} as Pkcs12CertificateInformation) : Record<string, (node: ParseNode) => void> {
    return {
        "isActive": n => { pkcs12CertificateInformation.isActive = n.getBooleanValue(); },
        "notAfter": n => { pkcs12CertificateInformation.notAfter = n.getNumberValue(); },
        "notBefore": n => { pkcs12CertificateInformation.notBefore = n.getNumberValue(); },
        "@odata.type": n => { pkcs12CertificateInformation.odataType = n.getStringValue(); },
        "thumbprint": n => { pkcs12CertificateInformation.thumbprint = n.getStringValue(); },
    }
}
