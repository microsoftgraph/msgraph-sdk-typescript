import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';

export interface ComplianceManagementPartnerAssignment{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Group assignment target. */
    target?:DeviceAndAppManagementAssignmentTarget | undefined;
}
