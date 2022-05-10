import {ResourceSpecificPermissionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceSpecificPermissionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceSpecificPermissionImpl();
}
