import {deserializeIntoCheckGrantedPermissionsForAppResponse} from './deserializeIntoCheckGrantedPermissionsForAppResponse';
import {CheckGrantedPermissionsForAppResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckGrantedPermissionsForAppResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckGrantedPermissionsForAppResponse;
}
