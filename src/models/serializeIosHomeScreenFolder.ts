import {IosHomeScreenFolder} from './iosHomeScreenFolder';
import {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {serializeIosHomeScreenFolderPage} from './serializeIosHomeScreenFolderPage';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolder(writer: SerializationWriter, iosHomeScreenFolder: IosHomeScreenFolder | undefined = {} as IosHomeScreenFolder) : void {
        serializeIosHomeScreenItem(writer, iosHomeScreenFolder)
        writer.writeCollectionOfObjectValues<IosHomeScreenFolderPage>("pages", iosHomeScreenFolder.pages, serializeIosHomeScreenFolderPage);
}
