import {deserializeIntoIosHomeScreenFolder} from './deserializeIntoIosHomeScreenFolder';
import {IosHomeScreenFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosHomeScreenFolder;
}
