import {FeedbackTokenSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeedbackTokenSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeedbackTokenSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeedbackTokenSetImpl();
}
