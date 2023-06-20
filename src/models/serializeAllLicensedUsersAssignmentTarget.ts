import {AllLicensedUsersAssignmentTarget} from './allLicensedUsersAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllLicensedUsersAssignmentTarget(allLicensedUsersAssignmentTarget: AllLicensedUsersAssignmentTarget | undefined = {} as AllLicensedUsersAssignmentTarget, writer: SerializationWriter) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, allLicensedUsersAssignmentTarget)
}
