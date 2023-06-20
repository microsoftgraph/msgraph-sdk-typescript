import {Album} from './album';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlbum(album: Album | undefined = {} as Album, writer: SerializationWriter) : void {
        writer.writeStringValue("coverImageItemId", album.coverImageItemId);
        writer.writeStringValue("@odata.type", album.odataType);
        writer.writeAdditionalData(album.additionalData);
}
