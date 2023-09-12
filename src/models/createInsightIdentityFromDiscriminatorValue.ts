import { deserializeIntoInsightIdentity } from './deserializeIntoInsightIdentity';
import { type InsightIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInsightIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInsightIdentity;
}
