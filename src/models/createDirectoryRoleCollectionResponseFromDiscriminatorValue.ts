import {DirectoryRoleCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryRoleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryRoleCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryRoleCollectionResponseImpl();
}
