import { deserializeIntoResourceSpecificPermissionGrant } from './deserializeIntoResourceSpecificPermissionGrant';
import { type ResourceSpecificPermissionGrant } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceSpecificPermissionGrant;
}
