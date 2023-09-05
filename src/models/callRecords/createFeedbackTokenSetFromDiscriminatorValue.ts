import { deserializeIntoFeedbackTokenSet } from './deserializeIntoFeedbackTokenSet';
import { type FeedbackTokenSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFeedbackTokenSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFeedbackTokenSet;
}
