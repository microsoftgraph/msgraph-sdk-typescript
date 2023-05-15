import {Album} from './album';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlbum(album: Album | undefined = {} as Album) : Record<string, (node: ParseNode) => void> {
    return {
        "coverImageItemId": n => { album.coverImageItemId = n.getStringValue(); },
        "@odata.type": n => { album.odataType = n.getStringValue(); },
    }
}
