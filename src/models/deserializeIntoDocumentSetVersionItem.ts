import { type DocumentSetVersionItem } from './documentSetVersionItem';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersionItem(documentSetVersionItem: DocumentSetVersionItem | undefined = {} as DocumentSetVersionItem) : Record<string, (node: ParseNode) => void> {
    return {
        "itemId": n => { documentSetVersionItem.itemId = n.getStringValue(); },
        "@odata.type": n => { documentSetVersionItem.odataType = n.getStringValue(); },
        "title": n => { documentSetVersionItem.title = n.getStringValue(); },
        "versionId": n => { documentSetVersionItem.versionId = n.getStringValue(); },
    }
}
