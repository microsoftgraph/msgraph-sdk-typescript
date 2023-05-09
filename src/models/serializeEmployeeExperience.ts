import {EmployeeExperience} from './employeeExperience';
import {LearningProvider} from './learningProvider';
import {serializeLearningProvider} from './serializeLearningProvider';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmployeeExperience(writer: SerializationWriter, employeeExperience: EmployeeExperience | undefined = {} as EmployeeExperience) : void {
        writer.writeCollectionOfObjectValues<LearningProvider>("learningProviders", employeeExperience.learningProviders, serializeLearningProvider);
        writer.writeStringValue("@odata.type", employeeExperience.odataType);
        writer.writeAdditionalData(employeeExperience.additionalData);
}
