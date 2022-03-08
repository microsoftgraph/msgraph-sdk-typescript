import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceSpecificPermissionGrant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceSpecificPermissionGrant();
}
