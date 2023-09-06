import { type PrintCertificateSigningRequest } from './printCertificateSigningRequest';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintCertificateSigningRequest(writer: SerializationWriter, printCertificateSigningRequest: PrintCertificateSigningRequest | undefined = {} as PrintCertificateSigningRequest) : void {
        writer.writeStringValue("content", printCertificateSigningRequest.content);
        writer.writeStringValue("@odata.type", printCertificateSigningRequest.odataType);
        writer.writeStringValue("transportKey", printCertificateSigningRequest.transportKey);
        writer.writeAdditionalData(printCertificateSigningRequest.additionalData);
}
