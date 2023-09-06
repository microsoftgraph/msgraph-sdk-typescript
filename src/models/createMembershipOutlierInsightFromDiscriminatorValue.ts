import { deserializeIntoMembershipOutlierInsight } from './deserializeIntoMembershipOutlierInsight';
import { type MembershipOutlierInsight } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMembershipOutlierInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembershipOutlierInsight;
}
