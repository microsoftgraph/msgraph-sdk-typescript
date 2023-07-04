import {EmailSettings} from '../emailSettings';
import {Entity} from '../entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LifecycleManagementSettings extends Entity, Parsable {
    /**
     * The emailSettings property
     */
    emailSettings?: EmailSettings | undefined;
    /**
     * The interval in hours at which all workflows running in the tenant should be scheduled for execution. This interval has a minimum value of 1 and a maximum value of 24. The default value is 3 hours.
     */
    workflowScheduleIntervalInHours?: number | undefined;
}
