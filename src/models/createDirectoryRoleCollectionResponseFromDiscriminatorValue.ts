import { deserializeIntoDirectoryRoleCollectionResponse } from './deserializeIntoDirectoryRoleCollectionResponse';
import { type DirectoryRoleCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryRoleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryRoleCollectionResponse;
}
