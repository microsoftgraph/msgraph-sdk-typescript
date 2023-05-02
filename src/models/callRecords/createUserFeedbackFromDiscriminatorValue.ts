import {deserializeIntoUserFeedback} from './deserializeIntoUserFeedback';
import {UserFeedback} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserFeedback;
}
