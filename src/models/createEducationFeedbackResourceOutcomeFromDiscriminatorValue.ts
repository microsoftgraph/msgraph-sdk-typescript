import {deserializeIntoEducationFeedbackResourceOutcome} from './deserializeIntoEducationFeedbackResourceOutcome';
import {EducationFeedbackResourceOutcome} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFeedbackResourceOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFeedbackResourceOutcome;
}
