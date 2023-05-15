import {deserializeIntoConfigurationManagerCollectionAssignmentTarget} from './deserializeIntoConfigurationManagerCollectionAssignmentTarget';
import {ConfigurationManagerCollectionAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationManagerCollectionAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConfigurationManagerCollectionAssignmentTarget;
}
