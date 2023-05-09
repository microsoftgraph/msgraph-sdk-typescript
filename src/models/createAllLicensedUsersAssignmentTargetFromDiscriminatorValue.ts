import {deserializeIntoAllLicensedUsersAssignmentTarget} from './deserializeIntoAllLicensedUsersAssignmentTarget';
import {AllLicensedUsersAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllLicensedUsersAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAllLicensedUsersAssignmentTarget;
}
