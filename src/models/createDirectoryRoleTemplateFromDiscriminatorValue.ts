import { deserializeIntoDirectoryRoleTemplate } from './deserializeIntoDirectoryRoleTemplate';
import { type DirectoryRoleTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryRoleTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryRoleTemplate;
}
