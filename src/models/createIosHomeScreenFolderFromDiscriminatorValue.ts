import { deserializeIntoIosHomeScreenFolder } from './deserializeIntoIosHomeScreenFolder';
import { type IosHomeScreenFolder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosHomeScreenFolder;
}
