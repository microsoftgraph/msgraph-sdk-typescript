import {EmployeeExperience} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmployeeExperienceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmployeeExperience {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmployeeExperience();
}
