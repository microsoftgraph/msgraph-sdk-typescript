import {deserializeIntoPermissionGrantPolicy} from './deserializeIntoPermissionGrantPolicy';
import {PermissionGrantPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionGrantPolicy;
}
