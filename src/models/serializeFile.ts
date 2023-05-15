import {File} from './file';
import {Hashes} from './hashes';
import {serializeHashes} from './serializeHashes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFile(writer: SerializationWriter, file: File | undefined = {} as File) : void {
        writer.writeObjectValue<Hashes>("hashes", file.hashes, serializeHashes);
        writer.writeStringValue("mimeType", file.mimeType);
        writer.writeStringValue("@odata.type", file.odataType);
        writer.writeBooleanValue("processingMetadata", file.processingMetadata);
        writer.writeAdditionalData(file.additionalData);
}
