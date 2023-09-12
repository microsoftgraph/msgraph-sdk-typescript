import { type IosHomeScreenFolder } from './iosHomeScreenFolder';
import { type IosHomeScreenFolderPage } from './iosHomeScreenFolderPage';
import { serializeIosHomeScreenFolderPage } from './serializeIosHomeScreenFolderPage';
import { serializeIosHomeScreenItem } from './serializeIosHomeScreenItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolder(writer: SerializationWriter, iosHomeScreenFolder: IosHomeScreenFolder | undefined = {} as IosHomeScreenFolder) : void {
        serializeIosHomeScreenItem(writer, iosHomeScreenFolder)
        writer.writeCollectionOfObjectValues<IosHomeScreenFolderPage>("pages", iosHomeScreenFolder.pages, serializeIosHomeScreenFolderPage);
}
