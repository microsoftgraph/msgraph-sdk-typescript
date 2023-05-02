import {deserializeIntoContactFolder} from './deserializeIntoContactFolder';
import {ContactFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactFolder;
}
