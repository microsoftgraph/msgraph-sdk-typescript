import {FileDetails} from './fileDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileDetails(fileDetails: FileDetails | undefined = {} as FileDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "fileName": n => { fileDetails.fileName = n.getStringValue(); },
        "filePath": n => { fileDetails.filePath = n.getStringValue(); },
        "filePublisher": n => { fileDetails.filePublisher = n.getStringValue(); },
        "fileSize": n => { fileDetails.fileSize = n.getNumberValue(); },
        "issuer": n => { fileDetails.issuer = n.getStringValue(); },
        "@odata.type": n => { fileDetails.odataType = n.getStringValue(); },
        "sha1": n => { fileDetails.sha1 = n.getStringValue(); },
        "sha256": n => { fileDetails.sha256 = n.getStringValue(); },
        "signer": n => { fileDetails.signer = n.getStringValue(); },
    }
}
