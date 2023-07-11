import {createLearningCourseActivityFromDiscriminatorValue} from './createLearningCourseActivityFromDiscriminatorValue';
import {createLearningProviderFromDiscriminatorValue} from './createLearningProviderFromDiscriminatorValue';
import {EmployeeExperience} from './employeeExperience';
import {LearningCourseActivity} from './learningCourseActivity';
import {LearningProvider} from './learningProvider';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {serializeLearningProvider} from './serializeLearningProvider';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmployeeExperience(employeeExperience: EmployeeExperience | undefined = {} as EmployeeExperience) : Record<string, (node: ParseNode) => void> {
    return {
        "learningCourseActivities": n => { employeeExperience.learningCourseActivities = n.getCollectionOfObjectValues<LearningCourseActivity>(createLearningCourseActivityFromDiscriminatorValue); },
        "learningProviders": n => { employeeExperience.learningProviders = n.getCollectionOfObjectValues<LearningProvider>(createLearningProviderFromDiscriminatorValue); },
        "@odata.type": n => { employeeExperience.odataType = n.getStringValue(); },
    }
}
