import {FolderViewImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFolderViewFromDiscriminatorValue(parseNode: ParseNode | undefined) : FolderViewImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FolderViewImpl();
}
