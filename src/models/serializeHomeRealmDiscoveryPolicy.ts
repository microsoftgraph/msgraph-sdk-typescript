import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHomeRealmDiscoveryPolicy(homeRealmDiscoveryPolicy: HomeRealmDiscoveryPolicy | undefined = {} as HomeRealmDiscoveryPolicy, writer: SerializationWriter) : void {
        serializeStsPolicy(writer, homeRealmDiscoveryPolicy)
}
