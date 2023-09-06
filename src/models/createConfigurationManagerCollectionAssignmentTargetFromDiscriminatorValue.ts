import { deserializeIntoConfigurationManagerCollectionAssignmentTarget } from './deserializeIntoConfigurationManagerCollectionAssignmentTarget';
import { type ConfigurationManagerCollectionAssignmentTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConfigurationManagerCollectionAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfigurationManagerCollectionAssignmentTarget;
}
