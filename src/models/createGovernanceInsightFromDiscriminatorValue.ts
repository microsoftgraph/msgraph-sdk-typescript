import { deserializeIntoGovernanceInsight } from './deserializeIntoGovernanceInsight';
import { deserializeIntoMembershipOutlierInsight } from './deserializeIntoMembershipOutlierInsight';
import { deserializeIntoUserSignInInsight } from './deserializeIntoUserSignInInsight';
import { type GovernanceInsight, type MembershipOutlierInsight, type UserSignInInsight } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGovernanceInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.membershipOutlierInsight":
                    return deserializeIntoMembershipOutlierInsight;
                case "#microsoft.graph.userSignInInsight":
                    return deserializeIntoUserSignInInsight;
            }
        }
    }
    return deserializeIntoGovernanceInsight;
}
