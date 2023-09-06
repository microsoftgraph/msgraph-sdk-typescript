import { deserializeIntoEducationFeedback } from './deserializeIntoEducationFeedback';
import { type EducationFeedback } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationFeedbackFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFeedback;
}
