import {deserializeIntoPermissionGrantPolicyCollectionResponse} from './deserializeIntoPermissionGrantPolicyCollectionResponse';
import {PermissionGrantPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionGrantPolicyCollectionResponse;
}
