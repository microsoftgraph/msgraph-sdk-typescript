import {AllLicensedUsersAssignmentTarget} from './allLicensedUsersAssignmentTarget';
import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllLicensedUsersAssignmentTarget(allLicensedUsersAssignmentTarget: AllLicensedUsersAssignmentTarget | undefined = {} as AllLicensedUsersAssignmentTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(allLicensedUsersAssignmentTarget),
    }
}
