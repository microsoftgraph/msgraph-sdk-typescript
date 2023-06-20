import {Album} from './album';
import {Bundle} from './bundle';
import {serializeAlbum} from './serializeAlbum';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBundle(bundle: Bundle | undefined = {} as Bundle, writer: SerializationWriter) : void {
        writer.writeObjectValue<Album>("album", bundle.album, serializeAlbum);
        writer.writeNumberValue("childCount", bundle.childCount);
        writer.writeStringValue("@odata.type", bundle.odataType);
        writer.writeAdditionalData(bundle.additionalData);
}
