import {ContactFolderCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactFolderCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactFolderCollectionResponseImpl();
}
