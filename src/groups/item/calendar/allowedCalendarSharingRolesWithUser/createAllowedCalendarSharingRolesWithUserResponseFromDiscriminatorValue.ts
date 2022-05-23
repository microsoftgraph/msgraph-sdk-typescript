import {AllowedCalendarSharingRolesWithUserResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllowedCalendarSharingRolesWithUserResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AllowedCalendarSharingRolesWithUserResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AllowedCalendarSharingRolesWithUserResponseImpl();
}
