import { deserializeIntoCheckGrantedPermissionsForAppResponse } from './deserializeIntoCheckGrantedPermissionsForAppResponse';
import { type CheckGrantedPermissionsForAppResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCheckGrantedPermissionsForAppResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckGrantedPermissionsForAppResponse;
}
