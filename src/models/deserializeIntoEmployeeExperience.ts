import {createLearningProviderFromDiscriminatorValue} from './createLearningProviderFromDiscriminatorValue';
import {EmployeeExperience} from './employeeExperience';
import {LearningProvider} from './learningProvider';
import {serializeLearningProvider} from './serializeLearningProvider';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmployeeExperience(employeeExperience: EmployeeExperience | undefined = {} as EmployeeExperience) : Record<string, (node: ParseNode) => void> {
    return {
        "learningProviders": n => { employeeExperience.learningProviders = n.getCollectionOfObjectValues<LearningProvider>(createLearningProviderFromDiscriminatorValue); },
        "@odata.type": n => { employeeExperience.odataType = n.getStringValue(); },
    }
}
