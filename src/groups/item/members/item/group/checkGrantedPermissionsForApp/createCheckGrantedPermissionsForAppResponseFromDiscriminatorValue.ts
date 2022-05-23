import {CheckGrantedPermissionsForAppResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckGrantedPermissionsForAppResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckGrantedPermissionsForAppResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckGrantedPermissionsForAppResponseImpl();
}
