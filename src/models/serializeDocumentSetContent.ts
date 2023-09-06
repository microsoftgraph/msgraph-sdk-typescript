import { type ContentTypeInfo } from './contentTypeInfo';
import { type DocumentSetContent } from './documentSetContent';
import { serializeContentTypeInfo } from './serializeContentTypeInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDocumentSetContent(writer: SerializationWriter, documentSetContent: DocumentSetContent | undefined = {} as DocumentSetContent) : void {
        writer.writeObjectValue<ContentTypeInfo>("contentType", documentSetContent.contentType, serializeContentTypeInfo);
        writer.writeStringValue("fileName", documentSetContent.fileName);
        writer.writeStringValue("folderName", documentSetContent.folderName);
        writer.writeStringValue("@odata.type", documentSetContent.odataType);
        writer.writeAdditionalData(documentSetContent.additionalData);
}
