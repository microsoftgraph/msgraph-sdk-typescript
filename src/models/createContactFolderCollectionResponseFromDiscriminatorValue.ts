import { deserializeIntoContactFolderCollectionResponse } from './deserializeIntoContactFolderCollectionResponse';
import { type ContactFolderCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContactFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactFolderCollectionResponse;
}
