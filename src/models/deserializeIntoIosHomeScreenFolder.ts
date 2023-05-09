import {createIosHomeScreenFolderPageFromDiscriminatorValue} from './createIosHomeScreenFolderPageFromDiscriminatorValue';
import {deserializeIntoIosHomeScreenItem} from './deserializeIntoIosHomeScreenItem';
import {IosHomeScreenFolder} from './iosHomeScreenFolder';
import {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {serializeIosHomeScreenFolderPage} from './serializeIosHomeScreenFolderPage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenFolder(iosHomeScreenFolder: IosHomeScreenFolder | undefined = {} as IosHomeScreenFolder) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIosHomeScreenItem(iosHomeScreenFolder),
        "pages": n => { iosHomeScreenFolder.pages = n.getCollectionOfObjectValues<IosHomeScreenFolderPage>(createIosHomeScreenFolderPageFromDiscriminatorValue); },
    }
}
