import {deserializeIntoIosHomeScreenFolderPage} from './deserializeIntoIosHomeScreenFolderPage';
import {IosHomeScreenFolderPage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderPageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosHomeScreenFolderPage;
}
