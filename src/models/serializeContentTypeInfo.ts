import {ContentTypeInfo} from './contentTypeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeInfo(writer: SerializationWriter, contentTypeInfo: ContentTypeInfo | undefined = {} as ContentTypeInfo) : void {
        writer.writeStringValue("id", contentTypeInfo.id);
        writer.writeStringValue("name", contentTypeInfo.name);
        writer.writeStringValue("@odata.type", contentTypeInfo.odataType);
        writer.writeAdditionalData(contentTypeInfo.additionalData);
}
