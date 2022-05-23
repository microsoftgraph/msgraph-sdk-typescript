import {PermissionGrantPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionGrantPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionGrantPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionGrantPolicyCollectionResponseImpl();
}
