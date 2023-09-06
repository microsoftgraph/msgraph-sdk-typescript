import { createFolderViewFromDiscriminatorValue } from './createFolderViewFromDiscriminatorValue';
import { type Folder } from './folder';
import { type FolderView } from './folderView';
import { serializeFolderView } from './serializeFolderView';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFolder(folder: Folder | undefined = {} as Folder) : Record<string, (node: ParseNode) => void> {
    return {
        "childCount": n => { folder.childCount = n.getNumberValue(); },
        "@odata.type": n => { folder.odataType = n.getStringValue(); },
        "view": n => { folder.view = n.getObjectValue<FolderView>(createFolderViewFromDiscriminatorValue); },
    }
}
