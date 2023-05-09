import {deserializeIntoEducationFeedback} from './deserializeIntoEducationFeedback';
import {EducationFeedback} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFeedback;
}
