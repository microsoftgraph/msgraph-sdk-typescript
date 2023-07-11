import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import {EducationOutcome} from './educationOutcome';
import {EducationResource} from './educationResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedbackResourceOutcome extends EducationOutcome, Parsable {
    /**
     * The actual feedback resource.
     */
    feedbackResource?: EducationResource | undefined;
    /**
     * The status of the feedback resource. The possible values are: notPublished, pendingPublish, published, failedPublish, unknownFutureValue.
     */
    resourceStatus?: EducationFeedbackResourceOutcomeStatus | undefined;
}
