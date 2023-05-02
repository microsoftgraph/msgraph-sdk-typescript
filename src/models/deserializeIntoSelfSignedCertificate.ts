import {SelfSignedCertificate} from './selfSignedCertificate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSelfSignedCertificate(selfSignedCertificate: SelfSignedCertificate | undefined = {} as SelfSignedCertificate) : Record<string, (node: ParseNode) => void> {
    return {
        "customKeyIdentifier": n => { selfSignedCertificate.customKeyIdentifier = n.getStringValue(); },
        "displayName": n => { selfSignedCertificate.displayName = n.getStringValue(); },
        "endDateTime": n => { selfSignedCertificate.endDateTime = n.getDateValue(); },
        "key": n => { selfSignedCertificate.key = n.getStringValue(); },
        "keyId": n => { selfSignedCertificate.keyId = n.getStringValue(); },
        "@odata.type": n => { selfSignedCertificate.odataType = n.getStringValue(); },
        "startDateTime": n => { selfSignedCertificate.startDateTime = n.getDateValue(); },
        "thumbprint": n => { selfSignedCertificate.thumbprint = n.getStringValue(); },
        "type": n => { selfSignedCertificate.type = n.getStringValue(); },
        "usage": n => { selfSignedCertificate.usage = n.getStringValue(); },
    }
}
