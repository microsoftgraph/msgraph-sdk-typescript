import {UserFeedback} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFeedback {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFeedback();
}
