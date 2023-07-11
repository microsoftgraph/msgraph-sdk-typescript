import {createLearningCourseActivityFromDiscriminatorValue} from './createLearningCourseActivityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EmployeeExperienceUser} from './employeeExperienceUser';
import {LearningCourseActivity} from './learningCourseActivity';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmployeeExperienceUser(employeeExperienceUser: EmployeeExperienceUser | undefined = {} as EmployeeExperienceUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(employeeExperienceUser),
        "learningCourseActivities": n => { employeeExperienceUser.learningCourseActivities = n.getCollectionOfObjectValues<LearningCourseActivity>(createLearningCourseActivityFromDiscriminatorValue); },
    }
}
