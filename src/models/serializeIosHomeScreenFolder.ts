import {IosHomeScreenFolder} from './iosHomeScreenFolder';
import {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {serializeIosHomeScreenFolderPage} from './serializeIosHomeScreenFolderPage';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosHomeScreenFolder(iosHomeScreenFolder: IosHomeScreenFolder | undefined = {} as IosHomeScreenFolder, writer: SerializationWriter) : void {
        serializeIosHomeScreenItem(writer, iosHomeScreenFolder)
        writer.writeCollectionOfObjectValues<IosHomeScreenFolderPage>("pages", iosHomeScreenFolder.pages, serializeIosHomeScreenFolderPage);
}
