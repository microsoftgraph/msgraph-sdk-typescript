import {HomeRealmDiscoveryPolicyCollectionResponse} from './homeRealmDiscoveryPolicyCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHomeRealmDiscoveryPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : HomeRealmDiscoveryPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HomeRealmDiscoveryPolicyCollectionResponse();
}
