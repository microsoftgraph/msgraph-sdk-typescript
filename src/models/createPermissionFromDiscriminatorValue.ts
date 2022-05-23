import {PermissionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionImpl();
}
