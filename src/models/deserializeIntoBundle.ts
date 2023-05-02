import {Album} from './album';
import {Bundle} from './bundle';
import {createAlbumFromDiscriminatorValue} from './createAlbumFromDiscriminatorValue';
import {serializeAlbum} from './serializeAlbum';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBundle(bundle: Bundle | undefined = {} as Bundle) : Record<string, (node: ParseNode) => void> {
    return {
        "album": n => { bundle.album = n.getObjectValue<Album>(createAlbumFromDiscriminatorValue); },
        "childCount": n => { bundle.childCount = n.getNumberValue(); },
        "@odata.type": n => { bundle.odataType = n.getStringValue(); },
    }
}
