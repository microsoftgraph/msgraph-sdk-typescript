import { deserializeIntoLearningCourseActivity } from './deserializeIntoLearningCourseActivity';
import { type LearningSelfInitiatedCourse } from './learningSelfInitiatedCourse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningSelfInitiatedCourse(learningSelfInitiatedCourse: LearningSelfInitiatedCourse | undefined = {} as LearningSelfInitiatedCourse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLearningCourseActivity(learningSelfInitiatedCourse),
        "startedDateTime": n => { learningSelfInitiatedCourse.startedDateTime = n.getDateValue(); },
    }
}
