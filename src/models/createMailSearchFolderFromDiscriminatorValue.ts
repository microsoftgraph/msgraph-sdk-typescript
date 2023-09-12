import { deserializeIntoMailSearchFolder } from './deserializeIntoMailSearchFolder';
import { type MailSearchFolder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailSearchFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailSearchFolder;
}
