import {DirectoryRoleTemplateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryRoleTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryRoleTemplateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryRoleTemplateImpl();
}
