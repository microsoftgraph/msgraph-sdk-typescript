import {LearningCourseActivity} from './learningCourseActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LearningSelfInitiatedCourse extends LearningCourseActivity, Parsable {
    /**
     * The date time value on which the self-initiated course was started by the learner. Optional.
     */
    startedDateTime?: Date | undefined;
}
