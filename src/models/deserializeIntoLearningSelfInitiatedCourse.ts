import {deserializeIntoLearningCourseActivity} from './deserializeIntoLearningCourseActivity';
import {LearningSelfInitiatedCourse} from './learningSelfInitiatedCourse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLearningSelfInitiatedCourse(learningSelfInitiatedCourse: LearningSelfInitiatedCourse | undefined = {} as LearningSelfInitiatedCourse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLearningCourseActivity(learningSelfInitiatedCourse),
        "startedDateTime": n => { learningSelfInitiatedCourse.startedDateTime = n.getDateValue(); },
    }
}
