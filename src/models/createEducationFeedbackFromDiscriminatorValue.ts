import {EducationFeedbackImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationFeedbackImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationFeedbackImpl();
}
