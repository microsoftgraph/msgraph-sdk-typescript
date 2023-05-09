import {deserializeIntoMailSearchFolder} from './deserializeIntoMailSearchFolder';
import {MailSearchFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailSearchFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailSearchFolder;
}
