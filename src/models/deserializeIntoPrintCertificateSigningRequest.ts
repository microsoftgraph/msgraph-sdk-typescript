import { type PrintCertificateSigningRequest } from './printCertificateSigningRequest';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintCertificateSigningRequest(printCertificateSigningRequest: PrintCertificateSigningRequest | undefined = {} as PrintCertificateSigningRequest) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { printCertificateSigningRequest.content = n.getStringValue(); },
        "@odata.type": n => { printCertificateSigningRequest.odataType = n.getStringValue(); },
        "transportKey": n => { printCertificateSigningRequest.transportKey = n.getStringValue(); },
    }
}
