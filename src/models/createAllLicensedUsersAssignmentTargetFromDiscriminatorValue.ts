import {AllLicensedUsersAssignmentTargetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllLicensedUsersAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AllLicensedUsersAssignmentTargetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AllLicensedUsersAssignmentTargetImpl();
}
