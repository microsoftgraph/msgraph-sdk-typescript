import {IosHomeScreenFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenFolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenFolder();
}
