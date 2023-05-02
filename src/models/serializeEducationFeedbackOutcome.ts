import {EducationFeedback} from './educationFeedback';
import {EducationFeedbackOutcome} from './educationFeedbackOutcome';
import {serializeEducationFeedback} from './serializeEducationFeedback';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedbackOutcome(writer: SerializationWriter, educationFeedbackOutcome: EducationFeedbackOutcome | undefined = {} as EducationFeedbackOutcome) : void {
        serializeEducationOutcome(writer, educationFeedbackOutcome)
        writer.writeObjectValue<EducationFeedback>("feedback", educationFeedbackOutcome.feedback, serializeEducationFeedback);
        writer.writeObjectValue<EducationFeedback>("publishedFeedback", educationFeedbackOutcome.publishedFeedback, serializeEducationFeedback);
}
