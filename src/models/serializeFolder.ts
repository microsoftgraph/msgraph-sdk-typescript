import { type Folder } from './folder';
import { type FolderView } from './folderView';
import { serializeFolderView } from './serializeFolderView';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFolder(writer: SerializationWriter, folder: Folder | undefined = {} as Folder) : void {
        writer.writeNumberValue("childCount", folder.childCount);
        writer.writeStringValue("@odata.type", folder.odataType);
        writer.writeObjectValue<FolderView>("view", folder.view, serializeFolderView);
        writer.writeAdditionalData(folder.additionalData);
}
