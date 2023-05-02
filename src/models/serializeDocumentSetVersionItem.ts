import {DocumentSetVersionItem} from './documentSetVersionItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersionItem(writer: SerializationWriter, documentSetVersionItem: DocumentSetVersionItem | undefined = {} as DocumentSetVersionItem) : void {
        writer.writeStringValue("itemId", documentSetVersionItem.itemId);
        writer.writeStringValue("@odata.type", documentSetVersionItem.odataType);
        writer.writeStringValue("title", documentSetVersionItem.title);
        writer.writeStringValue("versionId", documentSetVersionItem.versionId);
        writer.writeAdditionalData(documentSetVersionItem.additionalData);
}
