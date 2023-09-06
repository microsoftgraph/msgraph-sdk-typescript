import { type Hashes } from './hashes';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHashes(writer: SerializationWriter, hashes: Hashes | undefined = {} as Hashes) : void {
        writer.writeStringValue("crc32Hash", hashes.crc32Hash);
        writer.writeStringValue("@odata.type", hashes.odataType);
        writer.writeStringValue("quickXorHash", hashes.quickXorHash);
        writer.writeStringValue("sha1Hash", hashes.sha1Hash);
        writer.writeStringValue("sha256Hash", hashes.sha256Hash);
        writer.writeAdditionalData(hashes.additionalData);
}
