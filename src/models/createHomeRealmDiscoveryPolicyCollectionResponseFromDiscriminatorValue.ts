import {deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse} from './deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse';
import {HomeRealmDiscoveryPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse;
}
