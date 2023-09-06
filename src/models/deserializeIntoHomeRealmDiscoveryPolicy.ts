import { deserializeIntoStsPolicy } from './deserializeIntoStsPolicy';
import { type HomeRealmDiscoveryPolicy } from './homeRealmDiscoveryPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHomeRealmDiscoveryPolicy(homeRealmDiscoveryPolicy: HomeRealmDiscoveryPolicy | undefined = {} as HomeRealmDiscoveryPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(homeRealmDiscoveryPolicy),
    }
}
