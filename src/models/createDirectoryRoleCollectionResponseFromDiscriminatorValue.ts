import {deserializeIntoDirectoryRoleCollectionResponse} from './deserializeIntoDirectoryRoleCollectionResponse';
import {DirectoryRoleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryRoleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryRoleCollectionResponse;
}
