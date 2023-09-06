import { deserializeIntoEducationFeedbackResourceOutcome } from './deserializeIntoEducationFeedbackResourceOutcome';
import { type EducationFeedbackResourceOutcome } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationFeedbackResourceOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFeedbackResourceOutcome;
}
