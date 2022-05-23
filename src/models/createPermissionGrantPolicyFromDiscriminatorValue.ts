import {PermissionGrantPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionGrantPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionGrantPolicyImpl();
}
