import {deserializeIntoEducationFeedbackOutcome} from './deserializeIntoEducationFeedbackOutcome';
import {EducationFeedbackOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFeedbackOutcome;
}
