import {InsightIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInsightIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : InsightIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InsightIdentity();
}
