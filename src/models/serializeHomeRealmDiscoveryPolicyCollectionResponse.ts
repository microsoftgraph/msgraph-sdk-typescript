import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {HomeRealmDiscoveryPolicyCollectionResponse} from './homeRealmDiscoveryPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeHomeRealmDiscoveryPolicy} from './serializeHomeRealmDiscoveryPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHomeRealmDiscoveryPolicyCollectionResponse(homeRealmDiscoveryPolicyCollectionResponse: HomeRealmDiscoveryPolicyCollectionResponse | undefined = {} as HomeRealmDiscoveryPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, homeRealmDiscoveryPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicy>("value", homeRealmDiscoveryPolicyCollectionResponse.value, serializeHomeRealmDiscoveryPolicy);
}
