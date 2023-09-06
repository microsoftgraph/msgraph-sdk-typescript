import { type LearningCourseActivity } from './learningCourseActivity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface LearningSelfInitiatedCourse extends LearningCourseActivity, Parsable {
    /**
     * The date and time on which the self-initiated course was started by the learner. Optional.
     */
    startedDateTime?: Date | undefined;
}
