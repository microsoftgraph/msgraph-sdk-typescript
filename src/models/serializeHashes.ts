import {Hashes} from './hashes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHashes(hashes: Hashes | undefined = {} as Hashes, writer: SerializationWriter) : void {
        writer.writeStringValue("crc32Hash", hashes.crc32Hash);
        writer.writeStringValue("@odata.type", hashes.odataType);
        writer.writeStringValue("quickXorHash", hashes.quickXorHash);
        writer.writeStringValue("sha1Hash", hashes.sha1Hash);
        writer.writeStringValue("sha256Hash", hashes.sha256Hash);
        writer.writeAdditionalData(hashes.additionalData);
}
