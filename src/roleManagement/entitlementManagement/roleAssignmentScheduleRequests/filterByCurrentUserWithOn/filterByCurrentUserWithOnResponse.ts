import {UnifiedRoleAssignmentScheduleRequest} from '../../../../models/unifiedRoleAssignmentScheduleRequest';

export interface FilterByCurrentUserWithOnResponse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The value property */
    value?:UnifiedRoleAssignmentScheduleRequest[] | undefined;
}
