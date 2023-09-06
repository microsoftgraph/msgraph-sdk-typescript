import { type HomeRealmDiscoveryPolicy } from './homeRealmDiscoveryPolicy';
import { type HomeRealmDiscoveryPolicyCollectionResponse } from './homeRealmDiscoveryPolicyCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeHomeRealmDiscoveryPolicy } from './serializeHomeRealmDiscoveryPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHomeRealmDiscoveryPolicyCollectionResponse(writer: SerializationWriter, homeRealmDiscoveryPolicyCollectionResponse: HomeRealmDiscoveryPolicyCollectionResponse | undefined = {} as HomeRealmDiscoveryPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, homeRealmDiscoveryPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicy>("value", homeRealmDiscoveryPolicyCollectionResponse.value, serializeHomeRealmDiscoveryPolicy);
}
