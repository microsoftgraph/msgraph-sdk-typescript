import { type FolderView } from './folderView';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFolderView(writer: SerializationWriter, folderView: FolderView | undefined = {} as FolderView) : void {
        writer.writeStringValue("@odata.type", folderView.odataType);
        writer.writeStringValue("sortBy", folderView.sortBy);
        writer.writeStringValue("sortOrder", folderView.sortOrder);
        writer.writeStringValue("viewType", folderView.viewType);
        writer.writeAdditionalData(folderView.additionalData);
}
