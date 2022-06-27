import {RequestSchedule} from './requestSchedule';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilitySchedule extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleScheduleBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Membership type of the eligible assignment. It can either be Inherited, Direct, or Group. */
    memberType?: string | undefined;
    /** The schedule object of the eligible role assignment request. */
    scheduleInfo?: RequestSchedule | undefined;
}
