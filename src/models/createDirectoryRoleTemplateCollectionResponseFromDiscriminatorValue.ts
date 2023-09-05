import { deserializeIntoDirectoryRoleTemplateCollectionResponse } from './deserializeIntoDirectoryRoleTemplateCollectionResponse';
import { type DirectoryRoleTemplateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryRoleTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryRoleTemplateCollectionResponse;
}
