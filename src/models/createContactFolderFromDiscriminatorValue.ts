import { deserializeIntoContactFolder } from './deserializeIntoContactFolder';
import { type ContactFolder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContactFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactFolder;
}
