import {deserializeIntoEmployeeExperience} from './deserializeIntoEmployeeExperience';
import {EmployeeExperience} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmployeeExperienceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmployeeExperience;
}
