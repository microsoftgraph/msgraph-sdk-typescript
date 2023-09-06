import { deserializeIntoEducationFeedbackOutcome } from './deserializeIntoEducationFeedbackOutcome';
import { type EducationFeedbackOutcome } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationFeedbackOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFeedbackOutcome;
}
