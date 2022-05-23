import {HomeRealmDiscoveryPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : HomeRealmDiscoveryPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HomeRealmDiscoveryPolicyCollectionResponseImpl();
}
