import {LearningSelfInitiatedCourse} from './learningSelfInitiatedCourse';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLearningSelfInitiatedCourse(writer: SerializationWriter, learningSelfInitiatedCourse: LearningSelfInitiatedCourse | undefined = {} as LearningSelfInitiatedCourse) : void {
        serializeLearningCourseActivity(writer, learningSelfInitiatedCourse)
        writer.writeDateValue("startedDateTime", learningSelfInitiatedCourse.startedDateTime);
}
