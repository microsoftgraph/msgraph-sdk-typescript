import {EducationFeedbackResourceOutcome} from './educationFeedbackResourceOutcome';
import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import {EducationResource} from './educationResource';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {serializeEducationResource} from './serializeEducationResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedbackResourceOutcome(writer: SerializationWriter, educationFeedbackResourceOutcome: EducationFeedbackResourceOutcome | undefined = {} as EducationFeedbackResourceOutcome) : void {
        serializeEducationOutcome(writer, educationFeedbackResourceOutcome)
        writer.writeObjectValue<EducationResource>("feedbackResource", educationFeedbackResourceOutcome.feedbackResource, serializeEducationResource);
        writer.writeEnumValue<EducationFeedbackResourceOutcomeStatus>("resourceStatus", educationFeedbackResourceOutcome.resourceStatus);
}
