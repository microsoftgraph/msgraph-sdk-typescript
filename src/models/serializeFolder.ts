import {Folder} from './folder';
import {FolderView} from './folderView';
import {serializeFolderView} from './serializeFolderView';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFolder(writer: SerializationWriter, folder: Folder | undefined = {} as Folder) : void {
        writer.writeNumberValue("childCount", folder.childCount);
        writer.writeStringValue("@odata.type", folder.odataType);
        writer.writeObjectValue<FolderView>("view", folder.view, serializeFolderView);
        writer.writeAdditionalData(folder.additionalData);
}
