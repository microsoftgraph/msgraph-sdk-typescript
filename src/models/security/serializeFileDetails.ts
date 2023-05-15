import {FileDetails} from './fileDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileDetails(writer: SerializationWriter, fileDetails: FileDetails | undefined = {} as FileDetails) : void {
        writer.writeStringValue("fileName", fileDetails.fileName);
        writer.writeStringValue("filePath", fileDetails.filePath);
        writer.writeStringValue("filePublisher", fileDetails.filePublisher);
        writer.writeNumberValue("fileSize", fileDetails.fileSize);
        writer.writeStringValue("issuer", fileDetails.issuer);
        writer.writeStringValue("@odata.type", fileDetails.odataType);
        writer.writeStringValue("sha1", fileDetails.sha1);
        writer.writeStringValue("sha256", fileDetails.sha256);
        writer.writeStringValue("signer", fileDetails.signer);
        writer.writeAdditionalData(fileDetails.additionalData);
}
