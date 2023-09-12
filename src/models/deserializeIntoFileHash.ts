import { type FileHash } from './fileHash';
import { FileHashType } from './fileHashType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFileHash(fileHash: FileHash | undefined = {} as FileHash) : Record<string, (node: ParseNode) => void> {
    return {
        "hashType": n => { fileHash.hashType = n.getEnumValue<FileHashType>(FileHashType); },
        "hashValue": n => { fileHash.hashValue = n.getStringValue(); },
        "@odata.type": n => { fileHash.odataType = n.getStringValue(); },
    }
}
