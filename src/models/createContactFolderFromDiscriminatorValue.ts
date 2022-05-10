import {ContactFolderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactFolderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactFolderImpl();
}
