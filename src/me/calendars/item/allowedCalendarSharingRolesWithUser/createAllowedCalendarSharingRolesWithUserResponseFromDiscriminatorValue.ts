import {deserializeIntoAllowedCalendarSharingRolesWithUserResponse} from './deserializeIntoAllowedCalendarSharingRolesWithUserResponse';
import {AllowedCalendarSharingRolesWithUserResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllowedCalendarSharingRolesWithUserResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAllowedCalendarSharingRolesWithUserResponse;
}
