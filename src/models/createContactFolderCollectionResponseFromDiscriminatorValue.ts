import {deserializeIntoContactFolderCollectionResponse} from './deserializeIntoContactFolderCollectionResponse';
import {ContactFolderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactFolderCollectionResponse;
}
