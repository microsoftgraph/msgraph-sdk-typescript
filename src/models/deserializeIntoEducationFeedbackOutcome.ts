import {createEducationFeedbackFromDiscriminatorValue} from './createEducationFeedbackFromDiscriminatorValue';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {EducationFeedback} from './educationFeedback';
import {EducationFeedbackOutcome} from './educationFeedbackOutcome';
import {serializeEducationFeedback} from './serializeEducationFeedback';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedbackOutcome(educationFeedbackOutcome: EducationFeedbackOutcome | undefined = {} as EducationFeedbackOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationFeedbackOutcome),
        "feedback": n => { educationFeedbackOutcome.feedback = n.getObjectValue<EducationFeedback>(createEducationFeedbackFromDiscriminatorValue); },
        "publishedFeedback": n => { educationFeedbackOutcome.publishedFeedback = n.getObjectValue<EducationFeedback>(createEducationFeedbackFromDiscriminatorValue); },
    }
}
