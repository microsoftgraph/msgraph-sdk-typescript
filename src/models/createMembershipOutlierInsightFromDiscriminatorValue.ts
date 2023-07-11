import {deserializeIntoMembershipOutlierInsight} from './deserializeIntoMembershipOutlierInsight';
import {MembershipOutlierInsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembershipOutlierInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMembershipOutlierInsight;
}
