import { deserializeIntoEmployeeExperience } from './deserializeIntoEmployeeExperience';
import { type EmployeeExperience } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmployeeExperienceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmployeeExperience;
}
