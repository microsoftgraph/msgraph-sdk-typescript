import { deserializeIntoResourceSpecificPermission } from './deserializeIntoResourceSpecificPermission';
import { type ResourceSpecificPermission } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceSpecificPermission;
}
