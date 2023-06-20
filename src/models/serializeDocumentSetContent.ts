import {ContentTypeInfo} from './contentTypeInfo';
import {DocumentSetContent} from './documentSetContent';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetContent(documentSetContent: DocumentSetContent | undefined = {} as DocumentSetContent, writer: SerializationWriter) : void {
        writer.writeObjectValue<ContentTypeInfo>("contentType", documentSetContent.contentType, serializeContentTypeInfo);
        writer.writeStringValue("fileName", documentSetContent.fileName);
        writer.writeStringValue("folderName", documentSetContent.folderName);
        writer.writeStringValue("@odata.type", documentSetContent.odataType);
        writer.writeAdditionalData(documentSetContent.additionalData);
}
