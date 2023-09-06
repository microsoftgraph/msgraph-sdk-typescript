import { type Album } from './album';
import { type Bundle } from './bundle';
import { createAlbumFromDiscriminatorValue } from './createAlbumFromDiscriminatorValue';
import { serializeAlbum } from './serializeAlbum';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBundle(bundle: Bundle | undefined = {} as Bundle) : Record<string, (node: ParseNode) => void> {
    return {
        "album": n => { bundle.album = n.getObjectValue<Album>(createAlbumFromDiscriminatorValue); },
        "childCount": n => { bundle.childCount = n.getNumberValue(); },
        "@odata.type": n => { bundle.odataType = n.getStringValue(); },
    }
}
