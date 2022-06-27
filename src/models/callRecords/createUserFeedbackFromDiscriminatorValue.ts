import {UserFeedbackImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFeedbackImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFeedbackImpl();
}
