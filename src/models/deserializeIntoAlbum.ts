import { type Album } from './album';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAlbum(album: Album | undefined = {} as Album) : Record<string, (node: ParseNode) => void> {
    return {
        "coverImageItemId": n => { album.coverImageItemId = n.getStringValue(); },
        "@odata.type": n => { album.odataType = n.getStringValue(); },
    }
}
