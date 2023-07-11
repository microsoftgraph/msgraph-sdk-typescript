import {deserializeIntoEmployeeExperienceUser} from './deserializeIntoEmployeeExperienceUser';
import {EmployeeExperienceUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmployeeExperienceUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmployeeExperienceUser;
}
