import {MailSearchFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailSearchFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailSearchFolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailSearchFolder();
}
