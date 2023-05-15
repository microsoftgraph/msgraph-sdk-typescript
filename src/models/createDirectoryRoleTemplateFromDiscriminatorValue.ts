import {deserializeIntoDirectoryRoleTemplate} from './deserializeIntoDirectoryRoleTemplate';
import {DirectoryRoleTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryRoleTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryRoleTemplate;
}
