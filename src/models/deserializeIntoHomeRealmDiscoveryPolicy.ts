import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHomeRealmDiscoveryPolicy(homeRealmDiscoveryPolicy: HomeRealmDiscoveryPolicy | undefined = {} as HomeRealmDiscoveryPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(homeRealmDiscoveryPolicy),
    }
}
