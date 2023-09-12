import { deserializeIntoHomeRealmDiscoveryPolicy } from './deserializeIntoHomeRealmDiscoveryPolicy';
import { type HomeRealmDiscoveryPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHomeRealmDiscoveryPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHomeRealmDiscoveryPolicy;
}
