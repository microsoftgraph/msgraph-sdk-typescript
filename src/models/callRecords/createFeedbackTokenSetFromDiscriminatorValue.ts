import {FeedbackTokenSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeedbackTokenSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeedbackTokenSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeedbackTokenSet();
}
