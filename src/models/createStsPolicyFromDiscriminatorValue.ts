import {ActivityBasedTimeoutPolicyImpl, ClaimsMappingPolicyImpl, HomeRealmDiscoveryPolicyImpl, StsPolicyImpl, TokenIssuancePolicyImpl, TokenLifetimePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StsPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.activityBasedTimeoutPolicy":
                    return new ActivityBasedTimeoutPolicyImpl();
                case "#microsoft.graph.claimsMappingPolicy":
                    return new ClaimsMappingPolicyImpl();
                case "#microsoft.graph.homeRealmDiscoveryPolicy":
                    return new HomeRealmDiscoveryPolicyImpl();
                case "#microsoft.graph.tokenIssuancePolicy":
                    return new TokenIssuancePolicyImpl();
                case "#microsoft.graph.tokenLifetimePolicy":
                    return new TokenLifetimePolicyImpl();
            }
        }
    }
    return new StsPolicyImpl();
}
