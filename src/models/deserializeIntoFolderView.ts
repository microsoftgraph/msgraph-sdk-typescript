import {FolderView} from './folderView';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFolderView(folderView: FolderView | undefined = {} as FolderView) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { folderView.odataType = n.getStringValue(); },
        "sortBy": n => { folderView.sortBy = n.getStringValue(); },
        "sortOrder": n => { folderView.sortOrder = n.getStringValue(); },
        "viewType": n => { folderView.viewType = n.getStringValue(); },
    }
}
