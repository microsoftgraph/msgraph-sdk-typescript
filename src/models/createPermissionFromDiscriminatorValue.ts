import {deserializeIntoPermission} from './deserializeIntoPermission';
import {Permission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermission;
}
