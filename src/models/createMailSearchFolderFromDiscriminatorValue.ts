import {MailSearchFolderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailSearchFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailSearchFolderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailSearchFolderImpl();
}
