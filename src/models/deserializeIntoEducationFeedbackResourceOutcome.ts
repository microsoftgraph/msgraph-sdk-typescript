import { createEducationResourceFromDiscriminatorValue } from './createEducationResourceFromDiscriminatorValue';
import { deserializeIntoEducationOutcome } from './deserializeIntoEducationOutcome';
import { type EducationFeedbackResourceOutcome } from './educationFeedbackResourceOutcome';
import { EducationFeedbackResourceOutcomeStatus } from './educationFeedbackResourceOutcomeStatus';
import { type EducationResource } from './educationResource';
import { serializeEducationResource } from './serializeEducationResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedbackResourceOutcome(educationFeedbackResourceOutcome: EducationFeedbackResourceOutcome | undefined = {} as EducationFeedbackResourceOutcome) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOutcome(educationFeedbackResourceOutcome),
        "feedbackResource": n => { educationFeedbackResourceOutcome.feedbackResource = n.getObjectValue<EducationResource>(createEducationResourceFromDiscriminatorValue); },
        "resourceStatus": n => { educationFeedbackResourceOutcome.resourceStatus = n.getEnumValue<EducationFeedbackResourceOutcomeStatus>(EducationFeedbackResourceOutcomeStatus); },
    }
}
