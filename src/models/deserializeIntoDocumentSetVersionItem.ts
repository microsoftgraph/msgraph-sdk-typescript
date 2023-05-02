import {DocumentSetVersionItem} from './documentSetVersionItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersionItem(documentSetVersionItem: DocumentSetVersionItem | undefined = {} as DocumentSetVersionItem) : Record<string, (node: ParseNode) => void> {
    return {
        "itemId": n => { documentSetVersionItem.itemId = n.getStringValue(); },
        "@odata.type": n => { documentSetVersionItem.odataType = n.getStringValue(); },
        "title": n => { documentSetVersionItem.title = n.getStringValue(); },
        "versionId": n => { documentSetVersionItem.versionId = n.getStringValue(); },
    }
}
