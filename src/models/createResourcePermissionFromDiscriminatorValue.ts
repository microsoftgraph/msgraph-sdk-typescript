import {ResourcePermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourcePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourcePermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourcePermission();
}
