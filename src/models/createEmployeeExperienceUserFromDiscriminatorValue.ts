import { deserializeIntoEmployeeExperienceUser } from './deserializeIntoEmployeeExperienceUser';
import { type EmployeeExperienceUser } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmployeeExperienceUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmployeeExperienceUser;
}
