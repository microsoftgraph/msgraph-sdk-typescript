import {deserializeIntoActivityBasedTimeoutPolicy} from './deserializeIntoActivityBasedTimeoutPolicy';
import {deserializeIntoClaimsMappingPolicy} from './deserializeIntoClaimsMappingPolicy';
import {deserializeIntoHomeRealmDiscoveryPolicy} from './deserializeIntoHomeRealmDiscoveryPolicy';
import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {deserializeIntoTokenIssuancePolicy} from './deserializeIntoTokenIssuancePolicy';
import {deserializeIntoTokenLifetimePolicy} from './deserializeIntoTokenLifetimePolicy';
import {ActivityBasedTimeoutPolicy, ClaimsMappingPolicy, HomeRealmDiscoveryPolicy, StsPolicy, TokenIssuancePolicy, TokenLifetimePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.activityBasedTimeoutPolicy":
                    return deserializeIntoActivityBasedTimeoutPolicy;
                case "#microsoft.graph.claimsMappingPolicy":
                    return deserializeIntoClaimsMappingPolicy;
                case "#microsoft.graph.homeRealmDiscoveryPolicy":
                    return deserializeIntoHomeRealmDiscoveryPolicy;
                case "#microsoft.graph.tokenIssuancePolicy":
                    return deserializeIntoTokenIssuancePolicy;
                case "#microsoft.graph.tokenLifetimePolicy":
                    return deserializeIntoTokenLifetimePolicy;
            }
        }
    }
    return deserializeIntoStsPolicy;
}
