import { deserializeIntoMailFolderCollectionResponse } from './deserializeIntoMailFolderCollectionResponse';
import { type MailFolderCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailFolderCollectionResponse;
}
