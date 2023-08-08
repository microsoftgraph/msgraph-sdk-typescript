import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import type {EducationOutcome} from './educationOutcome';
import type {EducationResource} from './educationResource';
import type {Parsable} from '@microsoft/kiota-abstractions';

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
