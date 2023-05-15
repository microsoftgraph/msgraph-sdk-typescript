import {createHashesFromDiscriminatorValue} from './createHashesFromDiscriminatorValue';
import {File} from './file';
import {Hashes} from './hashes';
import {serializeHashes} from './serializeHashes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFile(file: File | undefined = {} as File) : Record<string, (node: ParseNode) => void> {
    return {
        "hashes": n => { file.hashes = n.getObjectValue<Hashes>(createHashesFromDiscriminatorValue); },
        "mimeType": n => { file.mimeType = n.getStringValue(); },
        "@odata.type": n => { file.odataType = n.getStringValue(); },
        "processingMetadata": n => { file.processingMetadata = n.getBooleanValue(); },
    }
}
