import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHomeRealmDiscoveryPolicy(writer: SerializationWriter, homeRealmDiscoveryPolicy: HomeRealmDiscoveryPolicy | undefined = {} as HomeRealmDiscoveryPolicy) : void {
        serializeStsPolicy(writer, homeRealmDiscoveryPolicy)
}
