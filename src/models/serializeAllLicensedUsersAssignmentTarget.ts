import { type AllLicensedUsersAssignmentTarget } from './allLicensedUsersAssignmentTarget';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAllLicensedUsersAssignmentTarget(writer: SerializationWriter, allLicensedUsersAssignmentTarget: AllLicensedUsersAssignmentTarget | undefined = {} as AllLicensedUsersAssignmentTarget) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, allLicensedUsersAssignmentTarget)
}
