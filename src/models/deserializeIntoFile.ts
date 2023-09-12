import { createHashesFromDiscriminatorValue } from './createHashesFromDiscriminatorValue';
import { type File } from './file';
import { type Hashes } from './hashes';
import { serializeHashes } from './serializeHashes';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFile(file: File | undefined = {} as File) : Record<string, (node: ParseNode) => void> {
    return {
        "hashes": n => { file.hashes = n.getObjectValue<Hashes>(createHashesFromDiscriminatorValue); },
        "mimeType": n => { file.mimeType = n.getStringValue(); },
        "@odata.type": n => { file.odataType = n.getStringValue(); },
        "processingMetadata": n => { file.processingMetadata = n.getBooleanValue(); },
    }
}
