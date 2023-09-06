import { type HomeRealmDiscoveryPolicy } from './homeRealmDiscoveryPolicy';
import { serializeStsPolicy } from './serializeStsPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHomeRealmDiscoveryPolicy(writer: SerializationWriter, homeRealmDiscoveryPolicy: HomeRealmDiscoveryPolicy | undefined = {} as HomeRealmDiscoveryPolicy) : void {
        serializeStsPolicy(writer, homeRealmDiscoveryPolicy)
}
