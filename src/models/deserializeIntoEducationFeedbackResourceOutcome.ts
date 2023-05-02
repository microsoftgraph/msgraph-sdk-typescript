import {createEducationResourceFromDiscriminatorValue} from './createEducationResourceFromDiscriminatorValue';
import {deserializeIntoEducationOutcome} from './deserializeIntoEducationOutcome';
import {EducationFeedbackResourceOutcome} from './educationFeedbackResourceOutcome';
import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import {EducationResource} from './educationResource';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedbackResourceOutcome(educationFeedbackResourceOutcome: EducationFeedbackResourceOutcome | undefined = {} as EducationFeedbackResourceOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationFeedbackResourceOutcome),
        "feedbackResource": n => { educationFeedbackResourceOutcome.feedbackResource = n.getObjectValue<EducationResource>(createEducationResourceFromDiscriminatorValue); },
        "resourceStatus": n => { educationFeedbackResourceOutcome.resourceStatus = n.getEnumValue<EducationFeedbackResourceOutcomeStatus>(EducationFeedbackResourceOutcomeStatus); },
    }
}
