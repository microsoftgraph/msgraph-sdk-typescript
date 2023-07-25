import {FileHash} from './fileHash';
import {FileHashAlgorithm} from './fileHashAlgorithm';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileHash(fileHash: FileHash | undefined = {} as FileHash) : Record<string, (node: ParseNode) => void> {
    return {
        "algorithm": n => { fileHash.algorithm = n.getEnumValue<FileHashAlgorithm>(FileHashAlgorithm); },
        "@odata.type": n => { fileHash.odataType = n.getStringValue(); },
        "value": n => { fileHash.value = n.getStringValue(); },
    }
}
