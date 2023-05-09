import {deserializeIntoResourceSpecificPermission} from './deserializeIntoResourceSpecificPermission';
import {ResourceSpecificPermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceSpecificPermission;
}
