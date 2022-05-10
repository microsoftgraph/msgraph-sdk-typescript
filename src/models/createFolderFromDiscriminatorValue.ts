import {FolderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : FolderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FolderImpl();
}
