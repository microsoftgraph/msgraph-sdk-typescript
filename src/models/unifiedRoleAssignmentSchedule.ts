import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleAssignmentSchedule extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleScheduleBase {
    /** If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it is null. Supports $expand. */
    activatedUsing?: UnifiedRoleEligibilitySchedule | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Type of the assignment which can either be Assigned or Activated. Supports $filter (eq, ne). */
    assignmentType?: string | undefined;
    /** How the assignments is inherited. It can either be Inherited, Direct, or Group. It can further imply whether the unifiedRoleAssignmentSchedule can be managed by the caller. Supports $filter (eq, ne). */
    memberType?: string | undefined;
    /** The period of the role assignment. It can represent a single occurrence or multiple recurrences. */
    scheduleInfo?: RequestSchedule | undefined;
}
