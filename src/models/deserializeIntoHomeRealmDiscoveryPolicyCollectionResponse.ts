import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {HomeRealmDiscoveryPolicyCollectionResponse} from './homeRealmDiscoveryPolicyCollectionResponse';
import {serializeHomeRealmDiscoveryPolicy} from './serializeHomeRealmDiscoveryPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHomeRealmDiscoveryPolicyCollectionResponse(homeRealmDiscoveryPolicyCollectionResponse: HomeRealmDiscoveryPolicyCollectionResponse | undefined = {} as HomeRealmDiscoveryPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(homeRealmDiscoveryPolicyCollectionResponse),
        "value": n => { homeRealmDiscoveryPolicyCollectionResponse.value = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
    }
}
