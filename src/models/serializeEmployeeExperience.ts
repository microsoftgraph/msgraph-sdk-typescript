import { type EmployeeExperience } from './employeeExperience';
import { type LearningCourseActivity } from './learningCourseActivity';
import { type LearningProvider } from './learningProvider';
import { serializeLearningCourseActivity } from './serializeLearningCourseActivity';
import { serializeLearningProvider } from './serializeLearningProvider';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEmployeeExperience(writer: SerializationWriter, employeeExperience: EmployeeExperience | undefined = {} as EmployeeExperience) : void {
        writer.writeCollectionOfObjectValues<LearningCourseActivity>("learningCourseActivities", employeeExperience.learningCourseActivities, serializeLearningCourseActivity);
        writer.writeCollectionOfObjectValues<LearningProvider>("learningProviders", employeeExperience.learningProviders, serializeLearningProvider);
        writer.writeStringValue("@odata.type", employeeExperience.odataType);
        writer.writeAdditionalData(employeeExperience.additionalData);
}
