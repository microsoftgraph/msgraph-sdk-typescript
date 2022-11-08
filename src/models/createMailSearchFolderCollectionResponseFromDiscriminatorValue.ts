import {MailSearchFolderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailSearchFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailSearchFolderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailSearchFolderCollectionResponse();
}
