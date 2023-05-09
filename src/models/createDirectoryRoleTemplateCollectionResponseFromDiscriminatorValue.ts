import {deserializeIntoDirectoryRoleTemplateCollectionResponse} from './deserializeIntoDirectoryRoleTemplateCollectionResponse';
import {DirectoryRoleTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryRoleTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryRoleTemplateCollectionResponse;
}
