import type {PrintCertificateSigningRequest} from './printCertificateSigningRequest';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintCertificateSigningRequest(writer: SerializationWriter, printCertificateSigningRequest: PrintCertificateSigningRequest | undefined = {} as PrintCertificateSigningRequest) : void {
        writer.writeStringValue("content", printCertificateSigningRequest.content);
        writer.writeStringValue("@odata.type", printCertificateSigningRequest.odataType);
        writer.writeStringValue("transportKey", printCertificateSigningRequest.transportKey);
        writer.writeAdditionalData(printCertificateSigningRequest.additionalData);
}
