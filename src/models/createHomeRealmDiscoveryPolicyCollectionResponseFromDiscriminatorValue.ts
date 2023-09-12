import { deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse } from './deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse';
import { type HomeRealmDiscoveryPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse;
}
