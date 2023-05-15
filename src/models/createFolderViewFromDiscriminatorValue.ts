import {deserializeIntoFolderView} from './deserializeIntoFolderView';
import {FolderView} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFolderViewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFolderView;
}
