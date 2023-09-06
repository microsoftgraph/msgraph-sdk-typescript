import { deserializeIntoFolderView } from './deserializeIntoFolderView';
import { type FolderView } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFolderViewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFolderView;
}
