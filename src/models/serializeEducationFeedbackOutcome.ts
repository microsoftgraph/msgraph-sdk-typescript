import { type EducationFeedback } from './educationFeedback';
import { type EducationFeedbackOutcome } from './educationFeedbackOutcome';
import { serializeEducationFeedback } from './serializeEducationFeedback';
import { serializeEducationOutcome } from './serializeEducationOutcome';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationFeedbackOutcome(writer: SerializationWriter, educationFeedbackOutcome: EducationFeedbackOutcome | undefined = {} as EducationFeedbackOutcome) : void {
        serializeEducationOutcome(writer, educationFeedbackOutcome)
        writer.writeObjectValue<EducationFeedback>("feedback", educationFeedbackOutcome.feedback, serializeEducationFeedback);
        writer.writeObjectValue<EducationFeedback>("publishedFeedback", educationFeedbackOutcome.publishedFeedback, serializeEducationFeedback);
}
