import { deserializeIntoFolder } from './deserializeIntoFolder';
import { type Folder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFolder;
}
