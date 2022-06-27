import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleInstance extends Partial<AdditionalDataHolder>, Partial<Parsable>, UnifiedRoleScheduleInstanceBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Time that the roleEligibilityScheduleInstance will expire. */
    endDateTime?: Date | undefined;
    /** Membership type of the assignment. It can either be Inherited, Direct, or Group. */
    memberType?: string | undefined;
    /** Identifier of the parent roleEligibilitySchedule for this instance. */
    roleEligibilityScheduleId?: string | undefined;
    /** Time that the roleEligibilityScheduleInstance will start. */
    startDateTime?: Date | undefined;
}
