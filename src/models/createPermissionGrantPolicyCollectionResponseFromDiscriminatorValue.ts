import { deserializeIntoPermissionGrantPolicyCollectionResponse } from './deserializeIntoPermissionGrantPolicyCollectionResponse';
import { type PermissionGrantPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPermissionGrantPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPermissionGrantPolicyCollectionResponse;
}
