import {IosHomeScreenFolderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenFolderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenFolderImpl();
}
