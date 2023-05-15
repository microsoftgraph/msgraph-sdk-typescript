import {CertificateAuthority} from './certificateAuthority';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCertificateAuthority(certificateAuthority: CertificateAuthority | undefined = {} as CertificateAuthority) : Record<string, (node: ParseNode) => void> {
    return {
        "certificate": n => { certificateAuthority.certificate = n.getStringValue(); },
        "certificateRevocationListUrl": n => { certificateAuthority.certificateRevocationListUrl = n.getStringValue(); },
        "deltaCertificateRevocationListUrl": n => { certificateAuthority.deltaCertificateRevocationListUrl = n.getStringValue(); },
        "isRootAuthority": n => { certificateAuthority.isRootAuthority = n.getBooleanValue(); },
        "issuer": n => { certificateAuthority.issuer = n.getStringValue(); },
        "issuerSki": n => { certificateAuthority.issuerSki = n.getStringValue(); },
        "@odata.type": n => { certificateAuthority.odataType = n.getStringValue(); },
    }
}
