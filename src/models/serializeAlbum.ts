import {Album} from './album';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlbum(writer: SerializationWriter, album: Album | undefined = {} as Album) : void {
        writer.writeStringValue("coverImageItemId", album.coverImageItemId);
        writer.writeStringValue("@odata.type", album.odataType);
        writer.writeAdditionalData(album.additionalData);
}
