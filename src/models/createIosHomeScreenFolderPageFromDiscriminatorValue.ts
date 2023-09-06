import { deserializeIntoIosHomeScreenFolderPage } from './deserializeIntoIosHomeScreenFolderPage';
import { type IosHomeScreenFolderPage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderPageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosHomeScreenFolderPage;
}
