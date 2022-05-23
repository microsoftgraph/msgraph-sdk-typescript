import {DefaultUserRolePermissionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultUserRolePermissionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultUserRolePermissionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultUserRolePermissionsImpl();
}
