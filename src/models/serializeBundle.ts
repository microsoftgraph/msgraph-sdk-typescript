import {Album} from './album';
import {Bundle} from './bundle';
import {serializeAlbum} from './serializeAlbum';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBundle(writer: SerializationWriter, bundle: Bundle | undefined = {} as Bundle) : void {
        writer.writeObjectValue<Album>("album", bundle.album, serializeAlbum);
        writer.writeNumberValue("childCount", bundle.childCount);
        writer.writeStringValue("@odata.type", bundle.odataType);
        writer.writeAdditionalData(bundle.additionalData);
}
