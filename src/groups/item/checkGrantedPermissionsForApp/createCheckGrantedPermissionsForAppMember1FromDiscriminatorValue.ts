import {CheckGrantedPermissionsForAppMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckGrantedPermissionsForAppMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckGrantedPermissionsForAppMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckGrantedPermissionsForAppMember1();
}
