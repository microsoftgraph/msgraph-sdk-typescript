import { type ContentTypeInfo } from './contentTypeInfo';
import { createContentTypeInfoFromDiscriminatorValue } from './createContentTypeInfoFromDiscriminatorValue';
import { type DocumentSetContent } from './documentSetContent';
import { serializeContentTypeInfo } from './serializeContentTypeInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetContent(documentSetContent: DocumentSetContent | undefined = {} as DocumentSetContent) : Record<string, (node: ParseNode) => void> {
    return {
        "contentType": n => { documentSetContent.contentType = n.getObjectValue<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
        "fileName": n => { documentSetContent.fileName = n.getStringValue(); },
        "folderName": n => { documentSetContent.folderName = n.getStringValue(); },
        "@odata.type": n => { documentSetContent.odataType = n.getStringValue(); },
    }
}
