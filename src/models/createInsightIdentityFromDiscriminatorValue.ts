import {deserializeIntoInsightIdentity} from './deserializeIntoInsightIdentity';
import {InsightIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInsightIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInsightIdentity;
}
