import { type Hashes } from './hashes';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHashes(hashes: Hashes | undefined = {} as Hashes) : Record<string, (node: ParseNode) => void> {
    return {
        "crc32Hash": n => { hashes.crc32Hash = n.getStringValue(); },
        "@odata.type": n => { hashes.odataType = n.getStringValue(); },
        "quickXorHash": n => { hashes.quickXorHash = n.getStringValue(); },
        "sha1Hash": n => { hashes.sha1Hash = n.getStringValue(); },
        "sha256Hash": n => { hashes.sha256Hash = n.getStringValue(); },
    }
}
