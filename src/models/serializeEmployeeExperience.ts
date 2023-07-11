import {EmployeeExperience} from './employeeExperience';
import {LearningCourseActivity} from './learningCourseActivity';
import {LearningProvider} from './learningProvider';
import {serializeLearningCourseActivity} from './serializeLearningCourseActivity';
import {serializeLearningProvider} from './serializeLearningProvider';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmployeeExperience(writer: SerializationWriter, employeeExperience: EmployeeExperience | undefined = {} as EmployeeExperience) : void {
        writer.writeCollectionOfObjectValues<LearningCourseActivity>("learningCourseActivities", employeeExperience.learningCourseActivities, serializeLearningCourseActivity);
        writer.writeCollectionOfObjectValues<LearningProvider>("learningProviders", employeeExperience.learningProviders, serializeLearningProvider);
        writer.writeStringValue("@odata.type", employeeExperience.odataType);
        writer.writeAdditionalData(employeeExperience.additionalData);
}
