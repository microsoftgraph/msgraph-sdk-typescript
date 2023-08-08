import type {EmployeeExperienceUser} from './employeeExperienceUser';
import type {LearningCourseActivity} from './learningCourseActivity';
import {serializeEntity} from './serializeEntity';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmployeeExperienceUser(writer: SerializationWriter, employeeExperienceUser: EmployeeExperienceUser | undefined = {} as EmployeeExperienceUser) : void {
        serializeEntity(writer, employeeExperienceUser)
        writer.writeCollectionOfObjectValues<LearningCourseActivity>("learningCourseActivities", employeeExperienceUser.learningCourseActivities, serializeLearningCourseActivity);
}
