import { deserializeIntoUserFeedback } from './deserializeIntoUserFeedback';
import { type UserFeedback } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFeedback;
}
