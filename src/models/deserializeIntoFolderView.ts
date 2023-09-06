import { type FolderView } from './folderView';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFolderView(folderView: FolderView | undefined = {} as FolderView) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { folderView.odataType = n.getStringValue(); },
        "sortBy": n => { folderView.sortBy = n.getStringValue(); },
        "sortOrder": n => { folderView.sortOrder = n.getStringValue(); },
        "viewType": n => { folderView.viewType = n.getStringValue(); },
    }
}
