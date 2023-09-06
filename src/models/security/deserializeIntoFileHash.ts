import { type FileHash } from './fileHash';
import { FileHashAlgorithm } from './fileHashAlgorithm';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFileHash(fileHash: FileHash | undefined = {} as FileHash) : Record<string, (node: ParseNode) => void> {
    return {
        "algorithm": n => { fileHash.algorithm = n.getEnumValue<FileHashAlgorithm>(FileHashAlgorithm); },
        "@odata.type": n => { fileHash.odataType = n.getStringValue(); },
        "value": n => { fileHash.value = n.getStringValue(); },
    }
}
